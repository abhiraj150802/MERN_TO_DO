import { useState } from "react"





const App = () => {
  const [input,setInput]=useState("");
  const [toDoValue,settoDoValue]=useState('')
  const handleInput=(e)=>{
     setInput(e.target.value)
  }
  const handleSubmit=()=>{
         settoDoValue(input)

  }



  

  return (
    <div>
      <input type="text" name="toDo" onChange={handleInput} value={input}/>
      <button onClick={handleSubmit}>add</button>
      <p>enter value ={toDoValue}</p>
    </div>
  )
}

export default App

