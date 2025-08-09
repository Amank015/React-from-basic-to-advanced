import React from 'react'

const Card = ({name,setName,title}) => {
  return (
    <div>
      <input type='text'
      onChange={(e)=>setName(e.target.value)}
      />
      <p>Name state {title}:{name}</p>
    </div>
  )
}

export default Card
