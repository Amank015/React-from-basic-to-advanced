import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);


     useEffect(()=>
    {     console.log("Event Listener Added");
    
      const handleResize = () => setWindowWidth(windowWidth.innerWidth);
       window.addEventListener("resize", handleResize)

       return () =>
       {   console.log("Event Listener Removed");
       
        window.removeEventListener("resize",handleResize)
       }
    },[])

  return (
    <div>
      <h>window width:{windowWidth}px</h>
    </div>
  )
}

export default ResizeComponent
