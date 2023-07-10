import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PhotosUploader from "../PhotosUploader";

import Perks from "../Perks";

const PlacesPage = () => {
  const { action } = useParams();
  //   console.log(action);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

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

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="bg-primary text-white py-2 px-6 rounded-full inline-flex gap-1"
            to="/account/places/new"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Place
          </Link>
        </div>
      )}

      {action === "new" && (
        <div>
          <form>
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

            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />

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
      )}
    </div>
  );
};

export default PlacesPage;
