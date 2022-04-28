import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo } from "../Redux/action"

export const Todo = ()=>{
    const todos = useSelector(store => store.todos)
   const dispatch = useDispatch()
    const [text, setText] =  useState("")
  const handleadd = ()=>{
    dispatch(
        addtodo({
            title: text,
            status : false,
        })
    );
  };
    return (
      <div>

          <input type="text"  onChange={(e)=>setText(e.target.value)}/>
          <button onClick={handleadd}>Add todo</button>
          {todos.map((t)=>(
             <div key={t.i}>{t.title}</div> 
          ))}
      </div>
  )
}