
const TodoFilter = ({changeFilter, filter}) => {
  return (
  <section className='container mx-auto '>
      <div className='bg-white flex justify-center gap-4 p-4 rounded-lg mb-4 dark:bg-slate-800'>
        <button  className={`${filter === "all" ? "text-blue-500 hover:text-gray-500" : "text-gray-500 hover:text-blue-500"}`} 
            onClick={()=>changeFilter('all')}>all</button>
        <button  className={`${filter === "active" ? "text-violet-500 hover:text-gray-500" : "text-gray-500 hover:text-violet-500"}`} 
            onClick={()=>changeFilter('active')}>active</button>
        <button  className={`${filter === "completed" ? "text-pink-500 hover:text-gray-500" : "text-gray-500 hover:text-pink-500"}`} 
            onClick={()=>changeFilter('completed')}>completed</button>
      </div>
  </section>
  )
}

export default TodoFilter