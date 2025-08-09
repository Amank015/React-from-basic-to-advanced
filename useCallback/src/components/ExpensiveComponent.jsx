import React, { useCallback, useEffect, useRef, useState,  } from 'react'

const ExpensiveComponent = () => {
    const [count,setCount] = useState(0);
    const [text,setText] = useState("");

     let previousref = useRef(null);
    const expeniveCalculation = useCallback(()=>
    {
        console.log("Running Expensive fn");
        let result = 0;
        for(let i=0; i<10000000; i++)
        {
            result += i
        }
       return result    
    },[count])


    useEffect(()=>
    {
       /*if(previousref.current)
        {
            if(previousref.current === expeniveCalculation)
            {
                console.log("Fn is not re-created");
                
            }
            else
            {
                console.log("Fn is got re-created");
                
            }
        }   
        else
            {
                previousref.current = expeniveCalculation
            } */
           
        if(previousref.current === expeniveCalculation)
            {
               console.log("Fn is not re-created");
               
            }
            else{
                console.log("Fn is got created");
                
            }        
        
    },[expeniveCalculation])

  return (
    <div>
      <input
      type='text'
      placeholder='Type Something'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <p>Expensive Calcultion Result:{expeniveCalculation()}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default ExpensiveComponent
