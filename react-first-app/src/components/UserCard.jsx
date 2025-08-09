import React from 'react'
import './UserCard.css'
const UserCard = ({name,image}) => {
  return (
    <div className='user-container'>
     <h1>{name}</h1>
     <img id='user-id' src={image} />
    </div>
  )
}

export default UserCard
