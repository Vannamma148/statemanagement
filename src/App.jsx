import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count <= 20) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
     
      <h1>Counter App</h1>
      <div className="card">
        <h2> {count}</h2>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>Decremnt</button>
      </div>
    
    </>
  )
}



export default App
