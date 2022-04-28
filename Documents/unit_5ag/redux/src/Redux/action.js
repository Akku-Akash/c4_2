//action type
export const Add_Count = "Add_Count"
export const Add_todo = "add_todo"
//action Creator
export const addcount = (data)=>{
    return (
      {  
          type : Add_Count,
         payload : data
    }
    )
}
export const addtodo = (data)=>{
return (
    {
        type : Add_todo,
        payload : data
    }
)
}
