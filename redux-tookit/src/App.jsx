
import './App.css'
import {useSelector,useDispatch} from "react-redux"
import { increment,decrement,incrementByAmount } from './features/counterSlice'
function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
 
  return (
    <>
   <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button aria-label=' Increment By Amounts'
        onClick={()=>dispatch(incrementByAmount())}
        >
          incrementByAmount
        </button>
      </div>
    </>
  )
}

export default App
