import React from 'react'

/*
type Color = "red" | "yellow" | "Blue"

type ButtonProps = {
    backgroundColor:string;
    //fontSize:number
    //fontSize:any
    textColor:Color
    padding:[number,number,number]
}
*/
/*



const Button = ({backgroundColor,fontSize, textColor,padding}:ButtonProps) => {
    
  return (
    <div>
        {backgroundColor}
        {fontSize}
        {textColor}
        {[padding]}
      <button>Click Me</button>
    </div>
  )
}
*/

/*
type ButtonProps = {
    style:{
        backgroundColor : string
        fontSize : number
        color : string
    }
}
*/

/*
type ButtonProps = {
      borderRadius : Record<string,number>
}*/


//const Button = ({style}:ButtonProps) =>

/*const Button = ({borderRadius}:ButtonProps) =>*/


type ButtonProps = {
    onclick : () => void
    //onclick : (test : string) => number
}

const  Button = ({onclick}:ButtonProps) =>
{
     return(
        <>
        <button onClick={onclick}>Cliek</button>
        </>
     )
}


export default Button
