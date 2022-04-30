
import { Add_todo, DELETE, FILTER, SORT } from "./action";
const init =   { todos :[]}
export const todosreducer = (store = init, {type, payload})=>{
    switch(type){
       
          case Add_todo :
              return {...store, todos : payload}
               case SORT :
                   return {...store, todos : [...store.todos].sort((a,b)=>
                    a[payload]>b[payload] ? 1 : a[payload]<b[payload] ? -1 : 0
                    ),
                }
                case FILTER : 
                return {...store, todos: store.todos.filter(e=>e.title.includes(payload))}
                case DELETE :
                    return {...store, todos : store.todos.filter(el =>el.id !== payload )}
                default :
                return store
    }


}