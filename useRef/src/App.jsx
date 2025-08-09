
//import { useEffect, useRef, useState } from 'react'
import './App.css'
import Stopwatch from './component/Stopwatch'

function App() {
  /*const [count,setCount] = useState(0);
  let val = useRef(0);

  let btnRef = useRef()
  const handleClick = () =>
  { val.current = val.current+1;
    console.log("value is :",val);
    
    setCount(count+1)
  }

function changeColor()
{
   btnRef.current.style.backgroundColor  = "yellow"
   btnRef.current.style.color = "black"
}


useEffect(()=>
{
   console.log("Render the component !");
   
})
*/
  return (
    <div>
      {/*<button ref={btnRef} onClick={handleClick}>Click btn</button>
      <div>
        <br/>

        <button onClick={changeColor}>
          Change Color
        </button>

        <br/>
        Count:{count}
      </div>*/}
      <Stopwatch/>
    </div>
  )
}

export default App
