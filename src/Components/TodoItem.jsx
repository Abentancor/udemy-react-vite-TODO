import CrossIcon from './Icons/CrossIcon'
const TodoItem = () => {
  return (
    <article className='flex gap-4 py-4 items-center border-b-gray-400 border-b px-4'>
    <button className='rounded-full border-2 w-4 h-4 inline-block'></button>
    <p className='text-gray-600 grow'>complete online javascript curse in bluuweb</p>
    <button className=''>
      <CrossIcon/>
    </button>
  </article>
  )
}

export default TodoItem