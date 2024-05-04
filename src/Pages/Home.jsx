import AllShow from "./AllShow";
import Banner from "./Banner";
import Review from "./Review";
import Stat from "./Stat";
import Subcatagories from "./Subcatagories/Subcatagories";

const Home = () => {
    return (
        <div className="max-w-6xl lg:mx-auto mx-4">
           <Banner/>
           <AllShow/>
           <Subcatagories/>
           <Stat/>
           <Review/>

        </div>
    );
};

export default Home;