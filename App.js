import React ,{useState} from 'react';
import './App.css';

function App() {

//use states
const [count,setCount]=useState(0)
return(
  <div className="App">
  <header> 
  <h1>Counter App using State/Hooks</h1>
  </header>
  <h2>Current value of count is {count}</h2>
  <button onClick={()=>setCount(0)}>Reset Counter</button>
  <button onClick={()=>count>=20 ? " ":setCount(count+1)}>Increase Counter</button>
  <button  onClick={()=>count <=0 ? " ": setCount(count-1)}>Decrease Counter</button>

  





  </div>
)


  
}

export default App;

