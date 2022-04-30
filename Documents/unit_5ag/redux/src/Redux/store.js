import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import { counterreducer } from "./counter/reducer"
import { todosreducer } from "./todo/reducer"

const rootReducer = combineReducers({
    counter : counterreducer,
    todo : todosreducer
})
const middleware = (store)=>(next)=>(action)=>{
    if(typeof action == "function"){
        return action(store.dispatch)
    }
console.log(store,"action", action)
next(action)
}

export const store = createStore(rootReducer,
    applyMiddleware(middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  

// store.subscribe(()=>{
//     console.log("changed", store.getState())
// })
console.log("store", store.getState())