import logo from './logo.svg';
import './App.css';
import ClassCounterComponent from './Components/ClassCounterComponent'
import FunctionCounterComponent from './Components/FunctionCounterComponent';

function App() {
  return (
   <div>
    <ClassCounterComponent></ClassCounterComponent>
    <hr></hr>
    <FunctionCounterComponent></FunctionCounterComponent>
   </div>
  );
}

export default App;
