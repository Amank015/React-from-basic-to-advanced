
//import { useEffect } from 'react'
import './App.css'
import DataFetcher from './components/DataFetcher'
import LoggerComponent from './components/LoggerComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
import ResizeComponent from './components/ResizeComponent'
import TimerComponent from './components/TimerComponent'
//import { useState } from 'react'

function App() {

  //const [count,setCount] = useState(0)
  //const [total,setTotal] = useState(1)

  //Variation-1
  //run on every render
  /*
   useEffect(()=>
  {
    alert("Run on each render")
  })
*/
/*
 const handleClick = ()=>
 {
    setCount(count+1)
    
 }

 const handleTotl = () =>
 {
  setTotal(total+1)
 }
*/
//variation-2
//that runs on only first render
/*
useEffect(()=>
{
alert("I will run on first render")
},[])
  */

//variation-3
/*
useEffect(()=>
{
 alert("I will run every render when count is updated")
},[count])
*/

//variation-4
//multiple dependencies
/*
useEffect(()=>
{
  alert("I will run every render when count is updated")
},[count,total])
*/


//Variation-5
/*//Let's add a cleanup function
useEffect(() => {
  alert("Count is updated")

  return () => {
    alert("count is unmounted from UI")
  }
}, [count])
*/


















  return (
    <>
     {/*<h1>Hello</h1>
     <button onClick={handleClick}>Update count</button>
      count is:{count}
      <br/>
      <h1>Hello</h1>
     <button onClick={handleTotl}>Update total</button>
      total is:{total}*/}
     {/* <LoggerComponent/>*/}
     {/*<TimerComponent/>*/}
     {/*<DataFetcher/>*/}
    { /*<ResizeComponent/>*/}
    <MultiEffectComponent/>
    </>
  )
}

export default App
