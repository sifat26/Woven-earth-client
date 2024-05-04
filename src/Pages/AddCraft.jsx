import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./Authentication/AuthProvider";
import { Fade } from "react-awesome-reveal";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handleAddItem = (event) => {
    event.preventDefault();
    const userName = user.displayName;
    const userEmail = user.email;
    const form = event.target;
    const itemName = form.itemName.value;
    const photoURL = form.photoURL.value;
    const sub = form.sub.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customize = form.customize.value;
    const status = form.status.value;
    const time = form.time.value;
    const newItem = {
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
    console.log(newItem);
    // console.log(itemName, photoURL, subCategory, description, price, rating, customize, status, time);
    console.log(newItem);
    fetch("https://af-server-site.vercel.app/addItem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully!",
            icon: "success",
          });
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <section className=" dark:bg-gray-900 mx-4">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <Fade>
            <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
              Add new craft item
            </h2>
          </Fade>

          <form onSubmit={handleAddItem}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-base font-medium  dark:text-white">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
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
                  max="10000000"
                  step="0.1"
                  name="price"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
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
                  name="time"
                  min="0"
                  max="1000"
                  step="0.1"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                  required
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
                  value={user.displayName}
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
                  value={user.email}
                  disabled
                />
              </div>
            </div>
            <button
              type="submit"
              className=" w-full items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-semibold text-center text-white  bg-[#E74C3C] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddCraft;
