import { useState } from "react";
import axios from "axios";

import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import { Navigate } from "react-router-dom";

const PlacesFormPage = () => {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  const [redirect, setRedirect] = useState(false);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function addNewPlace(ev) {
    ev.preventDefault();
    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        {preInput(
          "Title",
          "Title for your place. Should be short and catchy as in add"
        )}
        <input
          type="text"
          placeholder="title , for example : My Lovely Apartment"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        {preInput("Address", "Address for your place")}
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(ev) => setAddress(ev.target.value)}
        />

        {preInput("Photos", "More = Better")}

        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {preInput("Description", "Description of the place")}
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />

        {preInput("Perks", "Select all the perks of your place")}
        <div className="grid gap-2 mt-3 grid-cols-2 md:grid-cols-3 lg:gird-cols-6">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput("Extra Info", "House rules , etc")}
        <textarea
          value={extraInfo}
          onChange={(ev) => setExtraInfo(ev.target.value)}
        />

        {preInput(
          " Check in&out times",
          "add checkin and checkout times , remember to have some time for cleaning the room between the guests"
        )}
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Checkin Time</h3>
            <input
              type="text"
              placeholder="16:00"
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Checkout Time</h3>
            <input
              type="text"
              placeholder="22:00"
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max Guests</h3>
            <input
              type="number"
              value={maxGuests}
              onChange={(ev) => setMaxGuests(ev.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="primary my-4">Save</button>
        </div>
      </form>
    </div>
  );
};

export default PlacesFormPage;
