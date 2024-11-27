import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from "./context"
import { TodoForm, TodoItem } from './components'
function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos(todo)  // if hamne ese kardiya to like hamari purani sari values delete hijaygi todos ki or sirf yahi todo ki value lega
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }])
    // dekho hamare paas 3 value he like todo me like id , todo,completed vala to ham ese direct nai likh sakte ...pre,todo to ham is todo ko dege object 
    // to iss object me ham sabse pehle id denge or fir baki saab value usko ham sporead operator dse todo lelege
  }

  const updateTodo = (id, todo) => {
    // konse id ko update karna padega to uske liye hame todos jo he uspe loop lagana padega kyuki todo ek array he
    setTodos((prevTodo) => prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((prevTodos) => prevTodos.id === id ? { ...prevTodos, completed: !prevTodos.completed } : prevTodos))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
