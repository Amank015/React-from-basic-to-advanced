import React, { createContext, useState,  } from 'react'
import ChildA from './ChildA';
 import "./Context.css"
 //const UseContext = createContext();
  const ThemeContext = createContext();
const Context = () => {
  //const [user,setUser]= useState({name:"Frontend Devloper"});
  const [theme,setTheme] = useState("light")
  return (
    <div>
    <ThemeContext.Provider value={{theme,setTheme}}>
        <div className='container' style={{backgroundColor:theme==="light"?"beige":"black"}}>
      <ChildA/>
        </div>
    </ThemeContext.Provider>
    </div>
  )
}

export default Context
export {ThemeContext}
