import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const { action } = useParams();
  //   console.log(action);
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
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place. Should be short and catchy as in add
            </p>
            <input
              type="text"
              placeholder="title , for example : My Lovely Apartment"
            />
            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address for your place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-2xl mt-4"> Photos</h2>
            <p className="text-gray-500 text-sm">More = better</p>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="border bg-transparent rounded-2xl p-8 text-2xl text-gray-500">
                +
              </button>
            </div>
          </form>
        </div>
      )}
      My Places
    </div>
  );
};

export default PlacesPage;