import logo from './logo.svg';
import './App.css';
const skills = ["abc","def","ghi","Jkl"]
function App() {
  let arr = ["Services", "Projects", "About"]
  return (
    <div className="App">
      <div className='box'>
        <h4 className='logo'>LogoBAkery</h4>
<div className='map_box'>{arr.map((e)=>{
          return <div className='mapp'>{e}</div>
        })}
        </div>  
      <button className='button'>Contact</button>
      </div>
    </div>
  );
}


export default App;
