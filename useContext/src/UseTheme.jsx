import React from 'react'
import { ThemeContext } from './useContext/ToggleTheme'
import { useContext } from 'react'
const UseTheme = () => {
    const {theme,setTheme} = useContext(ThemeContext)


    const toggleTheme = () =>
    {
        if(theme ==="light")
        {
            setTheme("black")
        }
        else
        {
            setTheme("light")
        }
    }

  return (
    <div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default UseTheme
