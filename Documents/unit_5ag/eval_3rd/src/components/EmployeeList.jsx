import axios from "axios";
import { useEffect, useState } from "react";

export const EmployeeList = () => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:8080/employee").then(({data})=>{
        setUsers(data)
      })
  },[])
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
        <span className="imoge">{users.map(users => <img key={users.id} className="employee_image" src = {users.image}></img>)}</span> <br />
        {/* <img className="employee_image"/> */}
        <span className="employee_name">{users.map(users => <p key={users.id}>{users.employee_name}</p>)}</span>
        <span className="employee_title">{users.map(users => <p key={users.id}> {users.title}</p> )}</span>
      </div>
    </div>
  );
};
