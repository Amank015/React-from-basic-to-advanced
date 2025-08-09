
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [input,setInput] = useState(0);
  function expensiveTask(num)
  {
    console.log("Inside expensive task");
    for(let i=0; i<=10000000; i++){ /* empty */ }
    return num*2;
    
  }

//let doubleValue = expensiveTask(4)
let doubleValue = useMemo(()=>expensiveTask(input),[input])
  return (
    <>
    <h1>Hello Memo</h1>
    <button onClick={()=>setCount(count+1)}>
      Increment
    </button>
    <div>
      Count:{doubleValue}
    </div>
    
    <input
    type='number'
    placeholder='Enter the number'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    />
    <div>
      Count:{count}
    </div>
    </>
  )
}

export default App
