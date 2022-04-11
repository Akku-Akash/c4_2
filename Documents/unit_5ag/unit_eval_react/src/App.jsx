import { useState } from "react";

function App() {
  
  const [run, setRun] = useState({
    score: 76,
    wicket : 2,
    over : 50,
  })
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              run.score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
              run.wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
             Math.floor(run.over/6)+((run.over%6)/10)
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1"
        onClick={()=>{
          if(run.score > 100){
        <h1 className="status">India</h1>
          setRun({
            score: run.score ,
            wicket : run.wicket,
            over : run.over,
          })
         
          }
          else{

            setRun({
              score: run.score + 1,
              wicket : run.wicket,
              over : run.over,
            })
          }
        }}
        >Add 1</button>
        <button className="addScore4"
        onClick={()=>{
          if(run.score >100){
        
            setRun({
              score: run.score ,
              wicket : run.wicket,
              over : run.over,
            })
          }
            else{

              setRun({
                score: run.score + 4,
                wicket : run.wicket,
                over : run.over,
              })
            }
        }}
        >Add 4</button>
        <button className="addScore6"
        onClick={()=>{
          if(run.score > 100){
        
            setRun({
              score: run.score ,
              wicket : run.wicket,
              over : run.over,
            })
          }
          else{

            setRun({
              score: run.score + 6,
              wicket : run.wicket,
              over : run.over,
            })
          }
        }}
        >Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
        onClick={()=>{
          if(run.score > 100){
        
            setRun({
              score: run.score ,
              wicket : run.wicket,
              over : run.over,
            })
           
            }
         else if(run.wicket == 12){
            setRun({
              score: run.score,
              wicket : 12,
              over : run.over,
            })
          }
          else{

            setRun({
              score: run.score,
              wicket : run.wicket+1,
              over : run.over,
            })
          }
        }}
        >Add 1 wicket</button>
      </div>

      <div className="addBall"
      onClick={()=>{
        if(run.score >= 100){
        
          setRun({
            score: run.score ,
            wicket : run.wicket,
            over : run.over,
          })
         
          }
          else{

            setRun({
              score: run.score,
              wicket : run.wicket,
              over : +run.over+0.1, 
            })
          }
      }}
      >
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button>Add 1</button>
      </div>
       
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
