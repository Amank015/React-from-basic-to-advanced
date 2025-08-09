import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import UseTheme from '../UseTheme';
import "./Context.css"
const ThemeContext = createContext();

const ToggleTheme = () => {
    
    const [theme,setTheme] = useState("light");
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
         <div className='container' style={{backgroundColor:theme==="light" ? "black":"beige"}}>
          <UseTheme/>
         </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default ToggleTheme
export {ThemeContext}