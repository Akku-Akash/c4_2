import logo from './logo.svg';
import './App.css';
import { Item } from './Components/Items';
import { Counter } from './Components/Counter';


function App() {
  return (
    <div className="app">
      <Counter props={0}/>

    </div>
  );
}

export default App;
