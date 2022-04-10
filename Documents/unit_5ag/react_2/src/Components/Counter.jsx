import { useState } from "react"
import "./Counter.css"
export const Counter = ({props})=>{
    const [counter,setCounter] = useState(props)
    return <div>
        <h2 className={`${counter%2 !== 0 ? "red" : "green"}`}>Counter : {counter} </h2>
        <button onClick={()=>{
          setCounter(counter + 1)
        }}>Increment</button>
        <button onClick={()=>{
            if(counter == 0){
                setCounter(0)
            }
            else{

                setCounter(counter-1)
            }
        }}>Decrement</button>
        <button onClick={()=>{
            setCounter(2*counter)
        }}>Double</button>
    </div>
}