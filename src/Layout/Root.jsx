import { Outlet } from "react-router-dom";
import { NavigateBar } from "../Pages/NavigateBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Pages/Footer";
import AllArtCraft from "../Pages/AllArtCraft";

const Root = () => {
    return (
        <div>
            <NavigateBar></NavigateBar>
            <Outlet></Outlet>
            
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;