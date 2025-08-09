import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MultiEffectComponent = () => {
    const [count,setCount] = useState(0);
    const [seconds,setSeconds] = useState(0);

    useEffect(()=>
    {
       console.log("Count is changed",count);
       
    },[count])


    useEffect(()=>
    {   let counter = 0
        const intervalId = setInterval(()=>
        {     console.log("SetInterval Started",counter++);
        
            setSeconds(prevseconds=>prevseconds+1)
        },1000)

        return () =>
        {    console.log("Time to unmount");
        
            clearInterval(intervalId)
        }
    },[])



  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <h2>Seconds:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
