import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("App renderd", Math.random());
 const [value, setValue] = useState({
  value:0,
 })
//  const [multipliedValue, setMultipliedValue] = useState(1)
// let multipliedValue = value*5
 const multiplybyfive = ()=>{
  // setMultipliedValue(value *5)
  setValue({
    value:0,
   })
  // console.log("logged");
 }

  return (
    <>
     <h1>Main value : {value.value}</h1>
     <button 
     onClick={multiplybyfive}
     >Click to Multiply by 5 </button>
     {/* <h2>Multiplied Value: {multipliedValue} </h2> */}
    </>
  )
}

export default App
