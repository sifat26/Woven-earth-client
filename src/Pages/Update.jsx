import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const mproduct = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    itemName,
    photoURL,

    description,
    price,
    rating,
    sub,
    customize,
    status,
    time,
    userName,
    userEmail,
  } = mproduct;
  const handleUpdateItem = (event) => {
    event.preventDefault();
    const userName = mproduct.displayName;
    const form = event.target;
    const userEmail = mproduct.email;
    const itemName = form.itemName.value;
    const photoURL = form.photoURL.value;
    const sub = form.sub.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customize = form.customize.value;
    const status = form.status.value;
    const time = form.time.value;
    const updateItem = {
      itemName,
      photoURL,
      sub,
      description,
      price,
      rating,
      customize,
      status,
      time,
      userName,
      userEmail,
    };
    // console.log(itemName, photoURL, subCategory, description, price, rating, customize, status, time);
    console.log(updateItem);
    fetch(`https://af-server-site.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          navigate('/myartcraft');
          Swal.fire({
            title: "Success!",
            text: "Item Updated Successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="lg:max-w-5xl lg:mx-auto mx-8">
      <h1 className="text-center font-extrabold text-3xl">Update Item</h1>
      <form onSubmit={handleUpdateItem}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label className="block mb-2 text-base font-medium  dark:text-white">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={photoURL}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type item photo URL"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              defaultValue={itemName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type Craft Item Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Subcategory Name
            </label>
            <select
              name="sub"
              defaultValue={sub}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="Wooden Furniture & Sculptures">
                Wooden Furniture & Sculptures
              </option>
              <option value="Wooden Home Decor">Wooden Home Decor</option>
              <option value="Wooden Utensils and Kitchenware">
                Wooden Utensils and Kitchenware
              </option>
              <option value="Jute Home Decor">Jute Home Decor</option>
              <option value="Jute Kitchenware & utensils">
                Jute Kitchenware & utensils
              </option>
              <option value="Jute and wooden jewellery">
                Jute and wooden jewellery
              </option>
            </select>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Discription
            </label>
            <input
              type="text"
              name="description"
              defaultValue={description}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Short Description"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Price
            </label>
            <input
              type="number"
              min="0"
              max="100000000000"
              step="0.1"
              name="price"
              defaultValue={price}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Price"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Rating
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              name="rating"
              defaultValue={rating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Rating"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Customization
            </label>
            <select
              name="customize"
              defaultValue={customize}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              {/* <option selected="">Select One</option> */}
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Processing Time
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              name="time"
              defaultValue={time}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Processing Time"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Stock Status
            </label>
            <select
              name="status"
              defaultValue={status}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              User Name
            </label>
            <input
              type="text"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={userName}
              disabled
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-base font-medium dark:text-white">
              Email
            </label>
            <input
              type="text"
              
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={userEmail}
              disabled
            />
          </div>
        </div>
        <button
          type="submit"
          className=" w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-semibold text-center text-white  bg-[#E74C3C] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Update Detail
        </button>
      </form>
    </div>
  );
};

export default Update;
