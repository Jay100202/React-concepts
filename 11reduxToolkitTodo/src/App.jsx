import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App

// to jese contect api me wrap karte the provider ko to yaha bhi hoga na kuch ha hota he to lets wrap this 
// provder hoat he hamare paas bhi react -redx se ata he but vo ham main.js me karege or fir hamevaha chaiye hoga store bhi
