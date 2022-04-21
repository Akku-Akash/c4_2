import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
  
 
    // Create add and remove functions here that changes the
    // state.
  return ( 
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{
        
            setInv({books: inv.books+1, notebooks: inv.notebooks,pens :inv.pens})
          
        
        
        }}>+</button>
        <button className="circlularButton" onClick={()=>{
          if(inv.books <= 0){

            setInv({books: 0, notebooks: inv.notebooks,pens :inv.pens})
          }
          else{
            setInv({books: inv.books-1, notebooks: inv.notebooks,pens :inv.pens})
          }
        }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton"
        onClick={()=>{
          setInv({books: inv.books, notebooks: inv.notebooks+1,pens :inv.pens})
        }}
        >+</button>
        <button className="circlularButton"
        
        onClick={()=>{
          if(inv.notebooks <= 0){

            setInv({books: inv.notebooks, notebooks: 0,pens :inv.pens})
          }
          else{
            setInv({books: inv.books, notebooks: inv.notebooks-1,pens :inv.pens})
          }
        }}
        >-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton"
        onClick={()=>{
          setInv({books: inv.books, notebooks: inv.notebooks,pens :inv.pens+1})
        }}
        >+</button>
        <button className="circlularButton"
        onClick={()=>{
          if(inv.pens <= 0){

            setInv({books: inv.notebooks, notebooks: inv.notebooks,pens :0})
          }
          else{
            setInv({books: inv.books, notebooks: inv.notebooks,pens :inv.pens-1})
          }
        }}
        >-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.pens+inv.notebooks}
    </div>
  );
};
