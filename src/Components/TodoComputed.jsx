
const TodoComputed = ({computedItemLeft, clearCompleted}) => {
  return (
    <section className='p-4 flex justify-between mx-auto mb-6 container bg-white mt-1 rounded-lg'>
    <span className='text-gray-400'>{computedItemLeft} items left</span>
    <button onClick={clearCompleted} className='text-gray-400'>clear completed</button>
    </section>
  )
}

export default TodoComputed