import './App.css';
import { useState } from 'react';
function App(){
  const[count, setCount]=useState("Amen");
 
function handleReset() {
  setCount(0);
}
function handleClick() {
  setCount(previousCount => previousCount + 1);
}
function handleIncreaseByTwo() {
  setCount(previousCount => previousCount +2 );
}

return (
  <div>
   <h1>counter app</h1>  
   <p>count:{count}</p>

   <button onClick={handleClick}>Increase</button>
   <button onClick={handleReset}>Reset</button>
   <button onClick={handleIncreaseByTwo}>Increaseby 2</button>

  </div>
);}
export default App;