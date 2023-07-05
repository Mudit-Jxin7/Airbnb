const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const imageDownloader = require('image-downloader');

const User = require('./models/User.js')

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}));

mongoose.connect(process.env.MONGO_URL)

app.get('/', (req, res) => {
    res.json('test ok');
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }

});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'none'
                }).json(userDoc);
            });
        } else {
            res.status(422).json('password incorrect');
        }
    } else {
        res.json('not found');
    }
});

app.get('/profile', (req, res) => {
    mongoose.connect(process.env.MONGO_URL);
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';

    if (!link) {
        return res.status(400).json({ error: 'Link is required' });
    }

    try {
        await imageDownloader.image({
            url: link,
            dest: __dirname + '/uploads/' + newName,
        });

        // const url = await uploadToS3('/tmp/' + newName, newName, mime.lookup('/tmp/' + newName));
        res.json(newName);
    } catch (error) {
        console.error('Image download error:', error);
        res.status(500).json({ error: 'Failed to download image' });
    }
});

app.listen(4000, () => {
    console.log('listening on port 4000');
});
