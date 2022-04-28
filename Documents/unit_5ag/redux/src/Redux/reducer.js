import { Add_Count, Add_todo } from "./action";
const init =   {counter : 0, todos :[]}
export const counterreducer = (store = init, {type, payload})=>{
    switch(type){
        case Add_Count:
            return {...store, counter :store.counter + payload}
          case Add_todo :
              return {...store, todos : [...store.todos, payload]}
                default :
                return store
    }


}