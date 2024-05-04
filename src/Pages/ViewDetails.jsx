import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://af-server-site.vercel.app/viewdetails/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    })();
  }, [id]);
  const {
    itemName,
    photoURL,
    sub,
    description,
    price,
    rating,
    customize,
    status,
    time,
  } = product;
  return (
    <div >
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">Product Details</h2>
      <div className="flex justify-center" >
        <div className="grid grid-cols-12 gap-4 relative    overflow-hidden rounded-lg shadow-lg  w-full lg:w-3/6 my-7 mx-5">
        
        <div className="col-span-5">
          <img
            className=" h-full w-full object-cover "
            src={photoURL}
            alt="product image"
          />
        </div>
        <div className="col-span-7">
          <span className="absolute top-8 left-5 p-1 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white rounded-md ">
            {" "}
            {customize == "yes" ? "Customizable" : "Not Customizable"}
          </span>
          <div className="mt-4 px-5 pb-5 space-y-3 ">
            <h4 className=""><b>Subcategory Name: </b> {sub}</h4>
            <h5 className="text-2xl font-bold tracking-tight text-slate-900">
              {itemName}
            </h5>
            <p className="text-[#616161]"><b>Description: </b>{description}</p>
            <p className="text-[#616161]"><b>Processing Status: </b>{status}</p>
            <p className="text-[#616161]"> <b>Stock: </b>{time}</p>
            <p className="text-[#616161]"><b>Customization: </b>{customize}</p>
            <div className="mt-2.5 mb-5 flex items-center text-[#616161]">
            <b>Rating : </b> 
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  ${price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      
    </div>
  );
};

export default ViewDetails;
