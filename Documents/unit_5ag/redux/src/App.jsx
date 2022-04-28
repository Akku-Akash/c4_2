
import './App.css';
import { Counter } from './Components/Counter';
import { Todo } from './Components/todo';

function App() {

  return (
    <div className="app">
    <Counter/>
    <hr />
    <Todo/>
    </div>
  );
}

export default App;
