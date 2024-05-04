import { Option, Select } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { AuthContext } from "./Authentication/AuthProvider";
import MyItem from "./MyItem";

const MyArtCraft = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const [contol,setControl] = useState(false);
  const [myArtCraft, setMyArtCraft] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://af-server-site.vercel.app/myartcraft/${user.email}`);
      const data = await res.json();
      setLoading(false);
      setMyArtCraft(data);
      console.log("Etai amar", data);
    })();
  }, [user,contol]);
  const handleDelete=_id=>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
             fetch(`https://af-server-site.vercel.app/myartcraft/${_id}`,{
                method: "DELETE"
             })  
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                  setControl(!contol)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Product has been deleted.",
                        icon: "success"
                      });

                }
            })
         }
      });

  }
  const handleAllFilter=()=>{
    setLoading(true);
    (async()=>{
      const res = await fetch(`https://af-server-site.vercel.app/myartcraft/${user.email}`);
      const data = await res.json();
      
      setMyArtCraft(data);
      setLoading(false)

    })();
  }
  const handletrueFilter = () => {
    setLoading(true);
    (async () => {
      const value = 'yes';
      const res = await fetch(
        `https://af-server-site.vercel.app/showAllac/sort/${user.email}/${value}`
      );
      const data = await res.json();
      console.log("Yes",data);
      setMyArtCraft(data);
      setLoading(false);
    })();
  };
  const handlefalseFilter = () => {
    setLoading(true);
    (async () => {
      const value = 'no';
      const res = await fetch(
        `https://af-server-site.vercel.app/showAllac/sort/${user.email}/${value}`
      );
      const data = await res.json();
      setMyArtCraft(data);
      setLoading(false);
    })();
  };



  console.log(myArtCraft);
  return (
    <div className="max-w-6xl lg:mx-auto mx-4">
        
      <h2 className="text-center font-extrabold text-3xl">My Art & Crafts</h2>
      <div className="w-full">
          <label
            className="  block  text-blueGray-600 text-lg font-bold mb-2"
          >
            Filter By
          </label>
          <Select label="Select Filter Option">
            <Option onClick={handleAllFilter}>All</Option>
            <Option onClick={handletrueFilter}>Yes</Option>
            <Option onClick={handlefalseFilter}>No</Option>
          </Select>
        </div>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-12">
        {
            !loading?(
                myArtCraft.map(ac=>(
                    <MyItem key={myArtCraft._id}
                    ac={ac}
                    handleDelete={handleDelete}></MyItem>
                ))
            ):(<Loader/>)
        }
      </div>
      
    </div>
    
  );
};

export default MyArtCraft;
