
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
 const [count,setCount] = useState(0)


const handleCount = () =>
{
  setCount(count+1)
}

  return (
    <div>
      <Button increment={handleCount} text="click me">
          {count}
        </Button> 
      {/*
      <Card name="Aman Khan">
        <h1>WEB DEV</h1>
        <p>hello</p>
        </Card>*/}
    </div>
  )
}

export default App
