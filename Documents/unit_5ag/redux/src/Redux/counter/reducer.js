import { Add_Count } from "./action";
const init =   {counter : 0,}
export const counterreducer = (store = init, {type, payload})=>{
    switch(type){
        case Add_Count:
            return {...store, counter :store.counter + payload}
         
                default :
                return store
    }


}