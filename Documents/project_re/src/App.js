import './App.css';
import Home from './Screens/Home/Home';
import {Routes, Route} from "react-router-dom"
import Search from './Screens/Search/Search';

import Signup from "./Screens/Signup/Signup.jsx"
import Payment from "./Screens/Payment/Payment.jsx"

import Footer from './Components/Footer/Footer';
import { Hotels } from './Components/Hotels';
import { Register } from './Components/register/Register';
import { Login } from './Components/login/Login';
function App() {
  return (
    <>
      {/* <Navbar /> */}
     
     <Routes>
     <Route path={"/"} element={<Home />}></Route>
     
       <Route path={"/Home"} element={<Home />}></Route>
       <Route path = {"/Hotels"} element = {<Hotels/>}/>
       <Route path = {"/register"} element = {<Register/>}></Route>
       <Route path = {"/login"} element = {<Login/>}></Route>
 
       <Route path={"/Search"} element={<Search />}></Route>
       <Route path={"/Payment"} element={<Payment />}></Route>
     </Routes>

    <Footer/>
    </>
  );
}

export default App;
