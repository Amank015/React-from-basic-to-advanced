//import React, { useContext } from 'react'
//import { UseContext } from './Context'
import { useContext } from "react"
import { ThemeContext } from "./Context"
const ChildC = () => {
    //const user = useContext(UseContext)
     const {theme,setTheme} = useContext(ThemeContext)

     function toggleTheme()
     {
        if(theme==="light")
        {
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
     }
  return (
    <div>
     {/*Designation: {user.name}*/}
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChildC
