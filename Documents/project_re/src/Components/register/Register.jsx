
import  React, { useState } from "react"
import {Link}  from "react-router-dom"
import axios from "axios"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../Navbar"

export const Register =( ) =>{
    const navigate =useNavigate()
    const [user,setUser] = useState({
        
        email:"",
        password:""
    })

    const handleChange =e=>{
        const{name,value} =e.target
        

      
       
        setUser({
            ...user,
            [name]:value,
           
           
           
           
        })
    }

    const register   =()=>{
        const {email,password} = user
        
        if(email  && password ){
           
            axios.post("http://localhost:2345/register",user).then(res=>{alert(res.data.message)
         navigate("/login")
        
        })
           

        }else{
            alert ("Please fill all the spaces")
        }
       
    }

    return (
        <div>
            <Navbar/>
            <div className="r2">
                {console.log(user)}
            <p className="r1">Sign up</p>
            <label className="lb1" htmlFor="">E-mail</label>
            <br />
            <br />
            <input className="r3" type="text" name="email" value={user.email} placeholder="Enter Your E-mail"  onChange={handleChange}/>
            <br /><br />
            <label className="lb2" htmlFor="">Password</label>
            <br />
            <br />
            <input className="r3" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}/>
            <br />
            <br />
            <button className="r4" onClick={register}>Sign up</button>
            <br />
            <br />
            <div>Or Sign Up With</div>
            <br />
            <div className="r5">
            <button className="Gbtn1">
                 <img className="img1" src="https://i.ibb.co/v3ryL06/Login-Trip-Odeal-com-Google-Chrome-02-04-2022-23-19-15-3.png" alt="" />
                
                </button>
               
            </div>
            <br />
            <br />
            <label className="label" htmlFor="">Already have account ?</label>
            <Link className="link" to="/login">Login</Link>
            {/* <button className="r4">Log in</button> */}
            
            </div>
            <footer/>
        </div>
    )
}