//action type
export const Add_todo = "add_todo"
export const SORT = "SORT"
export const FILTER = "FILTER"
export const DELETE = "DELETE"

//action Creator
export const addtodo = (data)=>{
    return (
        {
            type : Add_todo,
            payload : data
        }
    )
    }
    export const gettodo = ()=> async (dispatch)=>{
       const data =  fetch("http://localhost:8080/todos").then(x=>x.json()).then(data =>{
            dispatch(addtodo(data))
          })
    }
    export const sort = (by) =>{
        return {
            type : SORT,
            payload : by
        }
    }
    export const filter = (text)=>{
        return {
            type : FILTER,
            payload : text,
        }
    }
    export const delete_todo = (id)=>{
        return {
            type : DELETE,
            payload : id
        }
    }