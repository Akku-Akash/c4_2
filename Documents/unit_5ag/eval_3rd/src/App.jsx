import { useState } from "react";
import "./App.css"
function App() {
  
  const [run, setRun] = useState({
    score: 76,
    wicket : 2,
    over : 50,
  })
  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
