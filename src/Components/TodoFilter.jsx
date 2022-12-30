
const TodoFilter = () => {
  return (
    <section className='container mx-auto '>
    <div className='bg-white flex justify-center gap-4 p-4 rounded-lg mb-4'>
      <button className='hover:text-blue-600'>all</button>
      <button className='hover:text-blue-600'>active</button>
      <button className='hover:text-blue-600'>complete</button>
    </div>
  </section>
  )
}

export default TodoFilter