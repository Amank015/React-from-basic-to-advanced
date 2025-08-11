import React from 'react'
import Button from './Button'

const Typescript = () => {
   // const url:string = "www.goggle.com";
   
  /* function type(amount:number, str:string)
   {
        
   }
*/
  // type(20,"hello")

//const ExampleComponent : React.FC<any> = () => {}
 
const onclick = (text : string) => {
    return 5
};

  return (
    <div>
        {/*
      <Button
       backgroundColor = "red"
       fontSize={30}
       textColor='yellow'
       padding={[20,50,51]}
      />*/}

     {/*
    <Button
     style={{
        backgroundColor:"yellow",
        fontSize:30,
        color:"black"
     }}
    />*/}

     {/*
    <Button
    borderRadius={
        {
            topleft:5,
            topRight:5,
            rightBottom:5,
            leftBottom:5
        }
    }
    />

*/}

   <Button
    onclick={onclick}
   />
    </div>
  )
}

export default Typescript
