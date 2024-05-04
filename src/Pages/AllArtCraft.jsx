import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
const TABLE_HEAD = ["Product Name", "Subcategory Name", "Price", "Rating",""];

const AllArtCraft = () => {
  const [allArtCraft, setAllArtCraft] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://af-server-site.vercel.app/addItem");
      const data = await res.json();
      setLoading(false)
      setAllArtCraft(data);
    })();
  }, []);
  console.log(allArtCraft);
  return (
    <div className="lg:max-w-6xl  lg:mx-auto mx-4 my-8 ">
        <h3 className="text-center text-3xl font-bold mb-8">All Art & Craft</h3>
        <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            loading?(
                <Loader/>

            ):
            (allArtCraft.map(({_id, itemName,  price,subCategory,rating }) => (
                <tr key={_id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {itemName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {subCategory}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      ${price}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {rating}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                      <Link to={`/viewdetails/${_id}`}>
                      <Button color="green">
                        View Details
                        
                      </Button>
                      </Link>
                    </Typography>
                  </td>
                </tr>
              )))
          }
        </tbody>
      </table>
    </Card>


  </div>
  ) 
};

export default AllArtCraft;
