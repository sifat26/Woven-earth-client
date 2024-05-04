import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { name,photo,description } = category
  return (
    <div>
      <h2>
      
        <Link to={`/subcategory/${name}`}>
        <div className=" flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
          <div className=" h-full mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
            className="h-52 w-96 object-fill"
              src={photo}
              alt="card-image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {description}
            </p>
          </div>
        </div>
        </Link>
        
      </h2>
    </div>
  );
};

export default Category;
