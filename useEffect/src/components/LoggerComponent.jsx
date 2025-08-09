import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const LoggerComponent = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>
    {
     console.log("Component renderd or count changed",count);
     
    })
  return (
    <div>
     <h1>Count:{count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>    
    </div>
  )
}

export default LoggerComponent
