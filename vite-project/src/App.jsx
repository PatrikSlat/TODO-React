import { useState } from 'react'
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos => {
     return [...currentTodos, { id: crypto.randomUUID(), title: newTodo, checked: false}]
    })
  }

  return <div className='content'>
    <h1>Your online TODO-App</h1>
    <form onSubmit={handleSubmit}> 
      <label value={newTodo} onChange={(e) => setNewTodo(e.target.value)} htmlFor='input-task'>What's your task for today ?</label>
      <input placeholder='Make dinner later...' name='input-task' id='input-task'></input>
      <button className='btn-submit'>Submit</button>
    </form>
    <h1>Your TODO's: </h1>
    <ul className="todo-list">
        {todos.map(todo => (
          <li className="item" key={todo.id}>
            <label className="item-label">
              {todo.title}
              <input type="checkbox" checked={todo.checked} readOnly /> {/* readOnly for checkboxes */}
              <button className="btn-delete">DELETE</button>
            </label>
          </li>
        ))}
      </ul>
  </div>
}

export default App
