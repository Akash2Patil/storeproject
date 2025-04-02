import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [products] = useContext(ProductContext)
  let distinct_category = products && products.reduce((acc,cv) => [...acc,cv.category],[])
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);
  
  
  return (
    <nav className='w-[15%] h-full  py-5 px-3 bg-zinc-300'>
        <a href="/create" className='border p-2 cursor-pointer'>Add Product</a>
        <h1 className='text-2xl mt-5'>Category Filter</h1>
        <div className='mt-3'>
          {distinct_category.map((c,i)=>{
            return <Link to={`/?category=${c}`} key={i} className='mb-2 capitalize p-1 flex items-center gap-2'><span className='block rounded-full w-[15px] h-[15px] bg-blue-300'></span> {c}</Link>
          })}
          
        </div>
      </nav>
  )
}

export default Nav