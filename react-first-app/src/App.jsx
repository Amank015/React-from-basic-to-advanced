
import UserCard from './components/UserCard'
import './App.css'
import DegreePhoto from "./assets/degree.jpg"
import Todos from './components/Todos'
function App() {


  return (
    <div className='container'>
      {/*<UserCard name="Aman" image={DegreePhoto}/>
      <UserCard name="Hello" image={DegreePhoto}/>
      <UserCard name="Code help" image={DegreePhoto}/>*/}
      <Todos/>     
    </div>
  )
}

export default App
