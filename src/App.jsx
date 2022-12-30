import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import TodoComputed from './Components/TodoComputed'
import TodoCreate from './Components/TodoCreate'
import TodoFilter from './Components/TodoFilter'
import TodoList from './Components/TodoList'

const App = () => {
  return (
   <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-slate-300 min-h-screen">

    <Header/>

    <main className='container mx-auto px-4 mb-4 '> 
      <TodoCreate/>
      <TodoList/>
      <TodoComputed/>
      <TodoFilter/>
    </main>

      <Footer/>

   </div>
  )
}

export default App