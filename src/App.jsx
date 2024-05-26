import { useState } from 'react'
import './App.css'

function App() {
  const [key, setKey] = useState("");
  const [count,setCount] = useState(0)
 
  return (
    <div>
      <input type="text" onChange={ (e) => setKey(e.target.value) } />
      <h3>your key is - { key }</h3>
      <button onClick={()=> setCount((prev)=>prev - 1)}> - </button>
      <span>{count}</span>
      <button onClick={ () => setCount((prev) => prev + 1)}> + </button>
    </div>
  )
}

export default App
