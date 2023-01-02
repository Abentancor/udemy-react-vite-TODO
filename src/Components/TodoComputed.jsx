
const TodoComputed = ({computedItemLeft, clearCompleted}) => {
  return (
    <section className=' transition-all duration-500 p-4 flex justify-between mx-auto mb-6 container bg-white mt-1 rounded-lg dark:bg-slate-800 '>
    <span className='text-gray-400 dark:text-gray-300'>{computedItemLeft} items left</span>
    <button onClick={clearCompleted} className='text-gray-400 dark:text-gray-300'>clear completed</button>
    </section>
  )
}

export default TodoComputed