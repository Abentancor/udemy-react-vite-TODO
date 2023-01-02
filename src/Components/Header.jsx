import { useEffect, useState } from "react"
import IconMoon from "./Icons/IconMoon"
import IconSun from "./Icons/IconSun"


const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)

  useEffect(()=>{

    if(darkMode){
      document.documentElement.classList.add('dark')
      //localStorage.theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode])

  return (
    <header className='container mx-auto px-4 '>
    <div className='flex justify-between py-4'>
      <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.3em]'>Todo</h1>
      <button onClick={()=> setDarkMode(!darkMode)} className='transition-all duration-1000'>
          {
            darkMode? <IconSun/> : <IconMoon/>
          }
      </button>
    </div>
</header>
  )
}

export default Header