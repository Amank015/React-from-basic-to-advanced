import React, { useState } from 'react'

const Todos = () => {
     const [todos, setTodos] = useState([]);
     const [input,setInput]  = useState("");
    
     const addTodo = () =>
     {
        if(input.trim() ===" ") return
         
        const newTodo = {
            id:Date.now(),
            text:input,
            completed:false
        }
        setTodos([...todos,newTodo])
        setInput("")
     }

     const toggleTodo = (id) =>
     {
        setTodos(
            todos.map((todo)=>
            {
                todo.id === id ? {...todo, completed:!todo.completed} : todo
            })
        )
     }
     const deleteTodo = (id) =>
     {
        setTodos(todos.filter((todo)=>todo.id !== id))
     }

  return (
    <div>
      <input
      type='text'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      placeholder='Enter the Todo'
      />
      <button onClick={addTodo}>AddTodo</button>

      <ul>
        {
          todos.map((todo)=>(
            <li key={todo.id}>
             <span>{todo.text}</span>
            
            <button onClick={()=>toggleTodo(todo.id)}>{todo.completed ? "__":""}</button>
            <button onClick={()=>deleteTodo(todo.id)}>deleteTodo</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todos
