const TodoCreate = () => { 
    return(
        <form className='bg-white rounded-lg overflow-hidden py-4 flex gap-4 items-center px-4 mb-4'>
        <span className='rounded-full border-2 w-4 h-4 inline-block'></span>
        <input className='w-full text-gray-400 outline-none' type="text" placeholder='create a new todo...'/>
      </form>
    )
 }
 export default TodoCreate