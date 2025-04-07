import React, { useState } from 'react'

const Create = () => {
  const [image, setimage] = useState("");
  const [title, settitle] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-center items-center py-5'>
        <h1 className='text-3xl text-red-500'>Add New Products</h1>
        <form action="" className='w-1/3 h-screen flex flex-col bg-zinc-500 rounded-lg py-10 px-10 mt-10'>
          <input type="url" placeholder='Image url' className='rounded border border-zinc-300 p-3 text-white mb-3' onChange={(e) => setimage(e.target.value)} value={image} />
          <input type="text" placeholder='Title' className='rounded border border-zinc-300 p-3 text-white mb-3' onChange={(e) => settitle(e.target.value)} value={title} />
          <div className='flex justify-between'>
            <input type="text" placeholder='Category' className='rounded border border-zinc-300 p-3 w-[48%] text-white mb-3' onChange={(e) => setcategory(e.target.value)} value={category} />
            <input type="number" placeholder='Price' className='rounded border border-zinc-300 p-3 w-[48%] text-white mb-3' onChange={(e) => setprice(e.target.value)} value={price} />
          </div>
          <textarea placeholder='Write a description of the product' className='rounded border border-zinc-300 p-3 text-white mb-3' rows="10" name="" id="" onChange={(e) => setdescription(e.target.value)} value={description}></textarea>
          <button href="#" className='rounded border border-zinc-300 p-3 text-white mb-3 p-2 cursor-pointer hover:bg-zinc-100 hover:text-zinc-500'>Add Product</button>
        </form>
      </div>
    </>
  )
}

export default Create