
import {addcount} from "../Redux/counter/action"
import { useDispatch, useSelector } from "react-redux"


export const Counter = ()=>{
    const dispatch = useDispatch()
    const counter = useSelector((store) => store.counter.counter)
    console.log("rendring counter")
    return (
        <div className="app">
        <h3>counter : {counter}</h3>
        <button onClick={()=>{
          dispatch(addcount(1))
        }}>Add_1</button>
    
        </div>
      );
}