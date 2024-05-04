import { Link } from "react-router-dom";

const CraftShow = ({art}) => {
    const{
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
    }=art
    return (
        <div>
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
          <p className="text-gray-700 text-base font-semibold">Customization: {customize}</p>
          <div className="flex items-center mt-2 mb-4">
            <span className="text-teal-500 font-bold ">Rating: {rating} </span>
            <span className="text-teal-500 ml-2">★ ★ ★ ★ ☆</span>
          </div>
          <p className="text-gray-700 text-base font-semibold">Price: {price}$</p>
          <p className="text-gray-700 text-base font-semibold">
            Processing Time: {time} Business days
          </p>
          <p className="text-gray-700 text-base font-semibold">Stock Status: {status}</p>
        </div>
        <div className="px-6 py-4 ">
          <Link to={`/viewdetails/${_id}`} className="w-full">
          <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mr-2">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>

            
        </div>
    );
};

export default CraftShow;