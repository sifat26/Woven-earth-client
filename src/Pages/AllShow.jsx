import { useEffect, useState } from "react";
import CraftShow from "./CraftShow";
import { useTypewriter } from "react-simple-typewriter";

const AllShow = () => {
    const [text] = useTypewriter({
        words: ['Craft', 'Items'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    const [art,setArt]=useState([])
    useEffect(()=>{
        (
            async()=>{
                const res=await fetch('https://af-server-site.vercel.app/showAllac');
                const data=await res.json();
                const fData=data.filter((item,index)=>
            index<6)
            setArt(fData)
            }
        )();

    },[])
    console.log(art);
    return (
        <div className="lg:max-w-6xl lg:mx-auto mx-8">
         <h3 className="text-center text-3xl font-bold mt-12"><span>{text}</span></h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
         {
          art.map(art =><CraftShow key={art._id} art={art} />)
        }

         </div>
            
        </div>
    );
};

export default AllShow;