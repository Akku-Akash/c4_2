import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


import { useNavigate } from 'react-router-dom';
import { login } from "../Redux/actions";



export const Login = () => {
    const dispatch = useDispatch();
   const navigate = useNavigate();
   
   useSelector((store) => {
    // console.log(store);
    return store.username;
 });
 const [formData, setFormData] = useState({
    username: "",
    password: "",
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8080/users").then((data) => {
       data.data.map((e) => {
          if (
             e.username === formData.username &&
             e.pass === formData.password
          ) {
             dispatch(login(e));
             if(e.role === 'admin'){

               navigate("/orders")
             } else{
               navigate("/neworder")
             }
          }
       });
    
    });
 };

    return (
      <div>
          
        <input
          className="username"
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          className="password"
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      
        <button className="submit" onClick={handleSubmit} >Login</button>
            
      </div>
    );
  };