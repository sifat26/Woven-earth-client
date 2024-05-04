import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddCraft from "../Pages/AddCraft";
import AllArtCraft from "../Pages/AllArtCraft";
import Login from "../Pages/Authentication/Login";
import { Register } from "../Pages/Authentication/Register";
import ErrorPage from "../Pages/ErrorPage";
import Footer from "../Pages/Footer";
import Home from "../Pages/Home";
import MyArtCraft from "../Pages/MyArtCraft";
import { NavigateBar } from "../Pages/NavigateBar";
import Review from "../Pages/Review";
import Stat from "../Pages/Stat";
import Update from "../Pages/Update";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import Subcatagories from "../Pages/Subcatagories/Subcatagories";
import Subcategory from "../Pages/Subcatagories/Subcategory";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/navbar',
                element:<NavigateBar></NavigateBar>
            },{
                path:'/login',
                element:<Login></Login>
            },{
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            },
            {
                path:'/addcraft',
                element:(
                    <PrivateRoute>
                        <AddCraft></AddCraft>
                    </PrivateRoute>
                )
            },
            {
                path:'/allartcraft',
                element:
                   
                        <AllArtCraft></AllArtCraft>
            },
            {
                path:'/viewdetails/:id',
            element:(
                <PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>
            )
            },
            {
                path:'/myartcraft',
            element:(
                <PrivateRoute>
                    <MyArtCraft></MyArtCraft>
                </PrivateRoute>
            )

            },
            {
                path:'/update/:id',
                element:(
                    <PrivateRoute>
                        <Update></Update>
                    </PrivateRoute>
                ),
                loader:({params})=>
                    fetch(`https://af-server-site.vercel.app/update/${params.id}`)
                
                
            },
            {
                path:'/allshowAllac',
                element:<AllArtCraft/>
            },
            {
                path:'/review',
                element:<Review></Review>
            },{
                path:'/stat',
                element:<Stat></Stat>
            },
            {
                path:'/subcategory',
                element:<Subcatagories/>
            },
            {
                path:'/subcategory/:subcategory',
                element:<Subcategory/>
            }
            
        ]
    }
]);
export default routes;