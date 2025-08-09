
import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParaComponent from './components/ParaComponent'
import Courses from './components/Courses'
import MockTest from './components/MockTest'
import Report from './components/Report'
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:"courses",
          element:<Courses/>
        },
         {
          path:"mocktest",
          element:<MockTest/>
        },
         {
          path:"report",
          element:<Report/>
        }
      ]
    },
    {
      path:"/student/:id",
      element:<div>
        <Navbar/>
        <ParaComponent/>
      </div>
    }
  ]
)
function App() {

  return (
    <>
     <h1>Hello React Router Dom</h1>
     <RouterProvider router={router}/>
    </>
  )
}

export default App


