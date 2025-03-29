import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import instance from '../utils/axios'
import axios from 'axios'
import Loading from './Loading'

const Details = () => {
  const [product , setproduct] = useState(null)
  const {id} = useParams()
  console.log(id);
  
  const getsingleproduct = async () =>{
        try {
          const {data} = await instance.get(`/products/${id}`)
          setproduct(data);
          
        } catch (error) {
          console.log(error);
          
        }
  }
  useEffect(()=>{
    getsingleproduct()
  },[])
  return (product ?
    <div className="w-full h-screen flex items-center">
    <div className='proinfo w-[50%] flex gap-10 justify-center items-center mx-auto'>
      <img className='w-[25%]' src={`${product.image}`}alt="" />
      <div className="content">
      <h2 className='text-4xl font-bold'>{product.title}</h2>
      <h2 className='text-3xl font-semibold text-gray-500'>{product.category}</h2>
      <h3 className='text-xl font-semibold'>Price : {product.price}₹</h3>
      <p className='text-sm mb-5'>{product.description}</p>

      <Link className="border px-3 py-2 mr-5 border-green-500 text-green-500 cursor-pointer">Edit</Link>
      <Link className="border px-3 py-2 border-red-500 text-red-500 cursor-pointer">Delete</Link>
      </div>
    </div>
    </div> : <Loading/>
  ) 
}

export default Details