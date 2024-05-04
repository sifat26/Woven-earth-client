import { useEffect, useState } from "react";
import Category from "./Category";

const Subcatagories = () => {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async() => {
      const res = await fetch('https://af-server-site.vercel.app/categories');
      const data =await res.json();
      setCategories(data);
    })()
  },[])
    
    return (
        <div>
            <div className="mt-12 mb-6 font-fontPrimary ">
      <h2 className="text-3xl md:text-4xl  lg:text-5xl font-semibold md:font-bold text-center">Categories</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-8">
        {
          categories.map(category=><Category key={category._id} category={category} />)
      }
      </div>
    </div>
            
        </div>
    );
};

export default Subcatagories;