import React from 'react'

const Nav = () => {
  return (
    <nav className='w-[15%] h-full  py-5 px-3 bg-zinc-300'>
        <a href="/create" className='border p-2 cursor-pointer'>Add Product</a>
        <h1 className='text-2xl mt-5'>Category Filter</h1>
        <ul className='mt-3'>
          <li className='mb-2 p-1 flex items-center gap-2'><span className='block rounded-full w-[15px] h-[15px] bg-blue-300'></span> Cat 1</li>
        </ul>
      </nav>
  )
}

export default Nav