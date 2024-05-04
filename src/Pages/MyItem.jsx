import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyItem = ({ ac, handleDelete }) => {
  const {
    _id,
    itemName,
    photoURL,
    customize,
    sub,
    description,
    price,
    rating,

    status,
    time,
    userName,
    userEmail,
  } = ac;

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden  shadow-lg flex flex-col">
        <img
          className="h-72 w-full"
          src={photoURL}
          alt="Art and Craft Product"
        />
        <div className="px-6 py-4 flex-grow">
          <div className="font-semibold text-xl mb-2">
            SubCategory Name : {sub}
          </div>
          <div className="font-semibold text-xl mb-2">
            Product Name: {itemName}
          </div>
          <p className="text-gray-700 text-base">Customization: {customize}</p>
          <div className="flex items-center mt-2 mb-4">
            <span className="text-teal-500 font-bold">Rating: {rating} </span>
            <span className="text-teal-500 ml-2">★ ★ ★ ★ ☆</span>
          </div>
          <p className="text-gray-700 text-base">Price: {price}$</p>
          <p className="text-gray-700 text-base">
            Processing Time: {time} Business days
          </p>
          <p className="text-gray-700 text-base ">Stock Status: {status}</p>
        </div>
        <div className="px-6 py-4 ">
          <Link to={`/update/${_id}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mr-2">
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItem;
