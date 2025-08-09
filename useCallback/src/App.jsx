//import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
//const [count,setCount] = useState(0);

/*
function handleClick()
{
  setCount(count+1)
}*/
/*
const handleClick  = useCallback(()=>
{
   setCount(count+1)
},[count])
*/
  return (
    <>
     <h1>Hello useCallback!</h1>
     {/*<div>
      Count:{count}
     </div>
     <button onClick={handleClick}>
      Increment
     </button>
     <br/> <br/>
    <ChildComponent btnName="Click me"
     handleClick={handleClick}
    />*/}
    <ExpensiveComponent/>
    </>
  )
}

export default App
