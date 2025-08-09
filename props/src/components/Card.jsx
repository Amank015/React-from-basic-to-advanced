import React from 'react'
import "./Card.css"
const Card = ({name,children}) => {
  return (
    <div>
      {name}
      {children}
    </div>
  )
}

export default Card
