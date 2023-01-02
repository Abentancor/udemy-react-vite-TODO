import { useState } from "react";

const TodoCreate = ({createTodo}) => { 

  const [title, setTitle] = useState('')


  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if(title.trim().length > 0){
      createTodo(title)
      setTitle('')
    }
     


  }

    return(
        <form onSubmit={handleSubmitAddTodo} className=' dark:bg-slate-800 transition-all duration-1000 bg-white rounded-lg overflow-hidden py-4 flex gap-4 items-center px-4 mb-4'>
        <span className='rounded-full border-2 w-4 h-4 inline-block  '></span>
        <input 
          className='w-full text-gray-500 dark:text-gray-300 outline-none transition-all duration-1000 dark:bg-slate-800 ' 
          type="text" 
          placeholder='create a new todo...' 
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}/>
      </form>
    )
 }
 export default TodoCreate