//import React, { useState } from 'react'
//import { useState } from 'react'
import Card from './components/Card'
import Logout from './ConditionalRendering/Logout'
import Login from './ConditionalRendering/Login'

const App = () => {
 // const [name,setName] = useState("")
    //const [isLoggedIn,setIsloggedIn] = useState(true)

/*
    if(!isLoggedIn)
    {
      return(
        <Login/>
      )
    }

*/

  /*  if(isLoggedIn)
    {
    return(
      <Logout/>
    )
    }
    else
    {
     <Login/>
    }
     */

    

  return (
    <div>
    {/*<Card title="Card1" name={name} setName={setName}/>
     <Card title="Card2" name={name} setName={setName}/>
    <p>I am inside Parent component value: {name}</p> */}    

   {/* {isLoggedIn ? <Logout/> :<Login/>}*/}

   <h1>Welcome to ConditionalRendering </h1>
     {/*{isLoggedIn && <Logout/>}*/}
    </div>
  )
}

export default App
