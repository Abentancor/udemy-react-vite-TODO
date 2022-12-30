import MoonIcon from "./Icons/MoonIcon"

const Header = () => {
  return (
    <header className='container mx-auto px-4 '>
    <div className='flex justify-between py-4'>
      <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.3em]'>Todo</h1>
      <button>
          <MoonIcon fill='#fff'/>
      </button>
    </div>
</header>
  )
}

export default Header