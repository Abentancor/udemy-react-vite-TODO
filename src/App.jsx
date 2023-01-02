import React, { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import TodoComputed from './Components/TodoComputed'
import TodoCreate from './Components/TodoCreate'
import TodoFilter from './Components/TodoFilter'
import TodoList from './Components/TodoList'

const initialStatesTodo = [
  {
    id: 1,
    title: 'go to the gym',
    completed: true,
  },
  {
    id: 2,
    title: 'complete online javascript bluuweb curse',
    completed: false,
  },
  {
    id: 3,
    title: '10 minutes meditation',
    completed: false,
  },
  {
    id: 4,
    title: 'pick up grocerys',
    completed: false,
  },
  {
    id: 5,
    title: 'complete Todo App Fronten dMentor',
    completed: false,
  }
]

const App = () => {

  const [todos, setTodos] = useState(initialStatesTodo)

  const createTodo = (title) =>{
      const newTodo = {
        id: Date.now(),
        title,
        complete: false,
      }
      setTodos([...todos, newTodo])
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  const updateTodo = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}: todo))
}

  const clearCompleted = ()=>{
    setTodos(todos.filter((todo)=> !todo.completed))
  }
  const computedItemLeft = todos.filter((todo) => !todo.completed).length

  const [filter, setFilter]= useState('all')

  const changeFilter = (filter) => setFilter(filter)

  const filteredTodos = ()=>{
    switch(filter){
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo)=> todo.completed);
      default: return todos
    }
  }


  return (
   <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-slate-300 min-h-screen dark:bg-slate-900">

    <Header/>

    <main className='container mx-auto px-4 mb-4 '> 
      <TodoCreate createTodo={createTodo}/>
      <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
      <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted} />
      <TodoFilter changeFilter={changeFilter} filter={filter}/>
    </main>

      <Footer/>

   </div>
  )
}

export default App