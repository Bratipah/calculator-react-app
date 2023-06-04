import { useState } from 'react'
import './App.css'
import Calc from './Calc'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="bg-white-200"/>
    <h6>React calculator</h6>
    <br></br>
    <Calc />
    </>
  
  )
}

export default App
