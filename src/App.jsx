import React from 'react'
import CrossIcon from './Components/Icons/CrossIcon'
import MoonIcon from './Components/Icons/MoonIcon'

const App = () => {
  return (
   <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">

      <header className='container mx-auto px-4 '>
        <div className='flex justify-between py-4'>
          <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.3em]'>Todo</h1>
          <button>
              <MoonIcon fill=''/>
          </button>
        </div>
        <form className='bg-white rounded-lg overflow-hidden py-4 flex gap-4 items-center px-4 mb-4'>
          <span className='rounded-full border-2 w-4 h-4 inline-block'></span>
          <input className='w-full text-gray-400 outline-none' type="text" placeholder='create a new todo...'/>
        </form>
    </header>

    <main className='container mx-auto px-4 mb-4'> 
      <div className='bg-white rounded-lg '>
        <article className='flex gap-4 py-4 items-center border-b-gray-400 border-b px-4'>
          <button className='rounded-full border-2 w-4 h-4 inline-block'></button>
          <p className='text-gray-600 grow'>complete online javascript curse in bluuweb</p>
          <button className=''>
            <CrossIcon/>
          </button>
        </article>

        <section className='p-4 flex justify-between mb-6'>
          <span className='text-gray-400'>5 items left</span>
          <button className='text-gray-400'>clear completed</button>
        </section>
      </div>
    </main>


    <section className='container mx-auto px-4 bg-white mb-6'>
      <div className='bg-white p-4 flex justify-center gap-4'>
      <button className='hover:text-blue-600'>all</button>
      <button className='hover:text-blue-600'>active</button>
      <button className='hover:text-blue-600'>complete</button>
      </div>
    </section>

    <p className='text-center '>drag & drop</p>
   </div>
  )
}

export default App