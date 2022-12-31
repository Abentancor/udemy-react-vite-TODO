import IconCheck from './Icons/IconCheck'
import IconCross from './Icons/IconCross'

const TodoItem = ({todo, updateTodo, removeTodo}) => {

  const {id, title, completed} = todo


  return (
  <article className='flex gap-4 py-4 items-center border-b-gray-400 border-b px-4'>
      <button 
          onClick={()=>updateTodo(id)}
          className= {`w-6 h-6 rounded-full border-2 flex ${completed ? "justify-center items-center bg-gradient-to-r from-blue-400  via-violet-500 to-pink-500" : "inline-block"}`}> 
        {completed && <IconCheck/> } 
      </button>
      <p className={`text-gray-600 grow ${completed && "line-through text-gray-300"}`}>{title}</p>
      <button   onClick={()=>removeTodo(id)} className=''>
          <IconCross/>
      </button>
  </article>
  )
}

export default TodoItem