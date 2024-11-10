import { useState } from 'react'
import './App.css'

function App() {
  return <div className='content'>
    <h1>Your online TODO-App</h1>
    <form> 
      <label htmlFor='input-task'>What's your task for today ?</label>
      <input name='input-task'></input>
      <button className='btn-submit'>Submit</button>
    </form>
    <h1>Your TODO's: </h1>
    <ul className='todo-list'>
      <li className='item'>
        <label className='item-label'>
          dummy
          <input type='checkbox'></input>
          <button className='btn-delete'>DELETE</button>
        </label>
      </li>
    </ul>
  </div>
}

export default App
