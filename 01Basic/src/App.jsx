import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setCounter]=useState(15)

const addValue=()=>{
  setCounter(counter+1)
}

const decValue=()=>{
  if(counter<=0){
    console.log(counter)
    return
  }
  setCounter(counter-1)
}
  

  return (
    <>
      <h1> Your queue number is {counter}</h1>

      <button onClick={addValue}>increase</button>
      <br/>
      <button onClick={decValue}>decrease</button>
    </>
  )
}

export default App
