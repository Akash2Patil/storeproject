import React from 'react'
import Home from './components/Home'
import Routing from './utils/Routing'
import { Link, useLocation } from 'react-router-dom'

const App = () => {
  const {search, pathname } = useLocation()
  console.log(search , pathname);
  
  return (
    <div className='w-full h-screen flex'>
      {(pathname != "/" || search.length > 0) && <Link to="/" className='cursor-pointer border p-1 text-xs text-red-300 absolute top-[1.5%] left-[90%]'>Show all products</Link>}
      <Routing />
    </div>
  )
}

export default App