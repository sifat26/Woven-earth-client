
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CraftShow from '../CraftShow';

const Subcategory = () => {
    const [subcategoryCollection, setSubcategoryCollection] = useState([]);
    const { subcategory } = useParams();
    console.log("Kopan",Subcategory);
    useEffect(() => {
      (async () => {
        const res = await fetch(
          `https://af-server-site.vercel.app/showAllac/${subcategory}`
        );
        const data = await res.json();
        setSubcategoryCollection(data);
      })();
    }, [subcategory]);
    return (
        <div>
            <div className="mt-8 md:mt-14 font-fontPrimary">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-center mb-8">
        Subcategory : {subcategory}
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {subcategoryCollection.length == 0 ? (
          <p className="text-2xl md:text-3xl font-semibold text-center">Please Add Item</p>
        ) : (
          subcategoryCollection?.map(craft => (
            <CraftShow key={craft._id} craft={craft} />
          ))
        )}
      </div>
    </div>
            
        </div>
    );
};

export default Subcategory;