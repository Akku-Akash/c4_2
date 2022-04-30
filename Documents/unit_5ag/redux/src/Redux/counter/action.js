//action type
export const Add_Count = "Add_Count"

//action Creator
export const addcount = (data)=>{
    return (
      {  
          type : Add_Count,
         payload : data
    }
    )
}