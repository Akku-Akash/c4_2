import { useState } from "react"
import { Link } from "react-router-dom"
import Home from "../Screens/Home/Home"

export const Navbar = () => {
    
    
    return (

        <div>
            <div className="main">
                <div className="logo_1">
                <Link to = "/home" element = {<Home/>}><img  className="abc_1" src="https://www.tripodeal.com/img/cheapfaresgo_logo.png" alt="" /></Link> 
                </div>
                <div className="secondary_">
                    <Link className="secondary_main" to="/home" href="/home"><h4>Home</h4></Link>
                    <Link className="secondary_main" to="/flights" href="/flights"><h4>FLIGHTS</h4></Link>
                    <Link className="secondary_main" to= {"/Hotels"} href=""><h4>HOTELS</h4></Link>
                    <Link className="secondary_main" to="/package" href="/package"> <h4>PACKAGES</h4></Link>
                    
                    <div className="account_logo">

                        <i class="fas fa-user-circle"></i>
                       
                        <div className="Account_div" name="" id="">
                            
                           <Link to ={"/register"} href = ""><h2>SignUp</h2></Link> 
                            <Link to = {"/login"} href = ""><h2>LogIn</h2></Link> 
                            
                        
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}