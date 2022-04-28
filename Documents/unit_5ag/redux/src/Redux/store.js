import {legacy_createStore as createStore} from "redux"
import { counterreducer } from "./reducer"


export const store = createStore(counterreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  

store.subscribe(()=>{
    console.log("changed", store.getState())
})