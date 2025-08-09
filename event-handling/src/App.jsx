
import './App.css'

function App() {
/*
const handleClick = ()=>
{
  alert("I am clicked")
}


const handleMouseOver = () =>
{
  alert("I am mouse over")
} 


const handleInput = (e) =>
{
   console.log("Value till now:",e.target.value);
   
}*/

/*
const handleSubmit = (e) =>
{
  e.preventDefault();
  alert("form submit ho gya")
}*/


const handleClickColor = () =>
{
  let bodystyle = document.body.style;
  if(bodystyle.backgroundColor==="black")
  {
    bodystyle.backgroundColor = "white"
  }
  else{
    bodystyle.backgroundColor = "black"
  }
}







  return (
    <>{/*
    <form onSubmit={handleSubmit}>
     <button type='submit'>Submit</button>
    </form>
*/}
    {/*<input type='text' onChange={(e)=>handleInput(e)}/>*/}
    {/*<p onMouseOver={handleMouseOver}>
      I am Frontend
    </p>
     <button onClick={handleClick}>Click Me</button>*/}

     <button onClick={handleClickColor}>Colorhandle</button>
    </>
  )
}

export default App
