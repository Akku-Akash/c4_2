import "./Home.css"
import { Link } from "react-router-dom";
import { BookingForm } from "../../Components/Home/BookingForm";
import { Deals } from "../../Components/Home/Deals";
import { ExclusiveDeals } from "../../Components/Home/ExclusiveDeals";
import { Gicons } from "../../Components/Home/Gicons";
import { Slider2 } from "../../Components/Home/Slider2";
import { Slider2images } from "../../Components/Home/Slider2images";
import { Navbar } from "../../Components/Navbar";

const Home = () => {
    return (
        <>
        <Navbar/>
            <div>
                {/* <Link to="/Search">Search button</Link> */}
                <BookingForm />
                <Gicons />
                <Deals />
                <Slider2 slides={Slider2images} />
                <ExclusiveDeals />
            </div>
            

        </>
    )
}


export default Home