import  React , {useState} from "react"
import {Link}  from "react-router-dom"
import axios  from "axios"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../Navbar"
import Footer from "../Footer/Footer"


export const Login =( ) =>{
    const  navigate =useNavigate()
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
    const login  =() =>{
        axios.post("http://localhost:2345/login",user)
        .then(res=>{alert(res.data.message)
            if(res.data.message==="Login Successfull"){
                navigate("/learn")
            }}
           
        
        )
    }

    return (
        <div>
     <Navbar/>
            {console.log(user)}
            <div className="l1">
            <p className="h1">Log in</p>
            {/* <h3>Enter your Mail id</h3> */}
            <label className="lb1" htmlFor="">E-mail</label>
            <br />
            <br />
         
            <input className="mail" type="text" name="email" value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} />
            <br />
            <br />
            <label className="lb2" htmlFor="">Password</label>
            <br />
            <br />
            <input className="mail" type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
            <br />
            <br />
            <button className="r4" onClick={login}>Log in</button>
            <br />
            <br />
            <div>Or log in with</div>
            <br />
            <div className="l3">
                <button className="Gbtn1">
                 <img className="img1" src="https://i.ibb.co/v3ryL06/Login-Trip-Odeal-com-Google-Chrome-02-04-2022-23-19-15-3.png" alt="" />
                
                </button>
               
            </div>
            <br />
            <br />
            {/* <Link to ="signup">Sign up</Link> */}
            <label className="label" htmlFor="">Don't have an account?</label>
            <Link className="link" to="/register">Sign up</Link>
            </div>
            
          <Footer/>
        </div>
    )
}
