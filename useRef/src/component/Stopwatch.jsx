import React, {  useRef, useState } from 'react'

const Stopwatch = () => {
    const [time,setTime] = useState(0);
     
    let timerRef = useRef(null);
    const startTimer = () =>
    {
      timerRef.current = setInterval(()=>
        {
          setTime(time=>time+1)
        },1000)
    }

    const stopTimer = () =>
    { 
         clearInterval(timerRef.current)
         //timerRef.current = null
    }

    const resetTimer = () =>
    {
       stopTimer();
       setTime(0);
    }
  return (
    <div>
      <h1>Stopwatch:{time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br/>
      <br/>
      <button onClick={stopTimer}>Stop</button>
      <br/>
      <br/>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default Stopwatch
