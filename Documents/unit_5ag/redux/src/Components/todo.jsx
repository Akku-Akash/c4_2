import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo, delete_todo, filter, gettodo, sort } from "../Redux/todo/action"

export const Todo = ()=>{
    const todos = useSelector(store => store.todo.todos )
    console.log("rendring todos")
   const dispatch = useDispatch()
    const [text, setText] =  useState("")
    const [ftr, setFtr] = useState("")
  const handleadd = ()=>{
    // dispatch(
    //     addtodo({
    //         title: text,
    //         status : false,
    //     })
    // );
    const payload = {
      title: text,
      status: false,
    };
  fetch("http://localhost:8080/todos",{
    body : JSON.stringify(payload),
    headers : {
      "content-type" : "application/json"
    },
    method : "Post",
  })
  .then(()=>setText(""))
  .then(()=>{
    dispatch(gettodo())
  })

  };
  useEffect(()=>{
   dispatch(gettodo())
  },[])
  

    return (
      <div>
        {/* <input type="text" placeholder="filter todo" onChange={(e)=>{
          setFtr(e.target.value)
        }} /> */}
     {/* <select onChange={(e)=>{
      dispatch(sort(e.target.value))
     }}>
       <option value="id">Sort By Id</option>
       <option value="title">Sort By Title</option>
       <option value="status">Sort By status</option>
     </select> */}
          <input type="text"  onChange={(e)=>setText(e.target.value)}/>
          <button onClick={handleadd}>Add todo</button>
          {todos.filter(todos =>todos.title.toLowerCase().includes(ftr)).map((t,i)=>(
             <div key={i}>{t.id}-{t.title} - {t.status ? "Done" : "Not Done"} <button onClick={()=>{
               dispatch(delete_todo(t.id))
             }}>Delete</button></div> 
          ))}
      </div>
  )
}