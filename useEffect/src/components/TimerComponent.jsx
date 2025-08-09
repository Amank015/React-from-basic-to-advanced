import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>
    {   let counter = 0;
        const intervalId = setInterval(()=>
        {    console.log("SetInterval executed !",counter++);
        
            setSeconds(prevSeconds=>prevSeconds+1)
        },1000)

        return ()=>
        {console.log("Time to stop the cleanup fn is unmounted");
        
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>
      <h1>Seconds:{seconds}</h1>    
    </div>
  )
}

export default TimerComponent
