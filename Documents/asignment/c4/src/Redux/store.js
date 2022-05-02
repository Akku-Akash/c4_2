import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import { reducer } from "./reducer"
import  thunk from "redux-thunk"

const rootReducer = combineReducers({
    order : reducer,
})


export const store = createStore(rootReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  

// store.subscribe(()=>{
//     console.log("changed", store.getState())
// })