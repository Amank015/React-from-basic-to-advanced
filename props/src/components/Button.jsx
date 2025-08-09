import React from 'react'

const Button = ({children,increment,text}) => {
  return (
    <div>
        {children}
      <button onClick={increment}>{text}</button>
    </div>
  )
}

export default Button
