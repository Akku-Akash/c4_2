
import {addcount} from "../Redux/action"
import { useDispatch, useSelector } from "react-redux"


export const Counter = ()=>{
    const dispatch = useDispatch()
    const counter = useSelector((store) => store.counter,function(pre,nex){
        console.log(pre,nex)
        return false;
    })
    return (
        <div className="app">
        <h3>counter : {counter}</h3>
        <button onClick={()=>{
          dispatch(addcount(1))
        }}>Add_1</button>
    
        </div>
      );
}