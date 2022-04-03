import React from 'react'
import "./Footer.css"
import pic2 from "./images/pic2.png"

const Footer = () => {
  return (
    <div className='footer'>
     
     <div className= "container">
       <div>
           <h3 className='callUs'>Call Us</h3>
        
           <h5 className='phone'>+91 9999-331-771</h5>
           <h5 className='phone'>+91 9999-331-777</h5>
           <h3 className='callUs'>Email</h3>
           <h5 className='phone'>support@travelsees.com</h5>
           <h5 className='callUs'> TripOdeal is part of</h5>
          
            <img src="admin-ui-app\src\components\tra.jpg" alt="" />
       </div>


       <div>
         <h5 className='bookNow'>Book Now</h5>
      
       
         <a className='ancor' href="Home">Home</a>
         <br />
         <br />
         <a className='ancor' href="">Flight</a>
         <br />
         <br />
         <a className='ancor' href="">Hotel</a>
         <br />
         <br />
         <a className='ancor' href="">Packages</a>
         <br />
         <br />
         <a className='ancor' href="">Travel Tips</a>
         <br />
         <br />
         <a className='ancor' href="">My Booking</a>
       </div>




  {/* div 3  */}
       <div>
           <h5 className='bookNow'>Support</h5>
          

           <a  className='ancor' href="">About Us</a>
           <br /><br />
           <a  className='ancor' href="">Contect</a>
           <br /><br />
           <a  className='ancor' href="">Privacy Policy</a>
           <br /><br />
           <a  className='ancor' href="">Term & Conditions</a>
           <br /><br />

           <a  className='ancor' href="">Make Payment
           <br />
           <button className='makePayment'>Pay Now  </button>
           </a>
          
       </div>




       <div>
           <h5 className='bookNow'> Pay Safely With Us</h5>
           <p className='p'>The payment is encrypted and transmitted securely with an SSL protocol.</p>
       </div>
     </div>


     <div className='img'>
     <img  className='img2' src={pic2} alt="" />
     <h6 className='happyEnding'>© 2020 Travelsees. All Rights Reserved.</h6>
     </div>



{/* background 2  */}


      
    </div>
  )
}

export default Footer
