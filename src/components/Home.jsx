import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { ProductContext } from '../utils/Context'

const Home = () => {
  const [products] = useContext(ProductContext)
  // console.log(products);
  
  return (products ? 
    <>
    <Nav/>
    <div className='w-[85%] h-full overflow-x-hidden overflow-y-auto'>
        <div className="cardwrap p-10 flex flex-wrap gap-3">
          {products.map((p,i)=>{
            return <Link key={p.id} to={`/details/${p.id}`} className="card shadow w-[18%] p-3 rounded cursor-pointer">
            <div className='hover:scale-110  h-[25vh] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${p.image})`}}>
            </div>
            <h1 className='mt-3 text-sm text-center font-bold hover:text-blue-300'>{p.title}.</h1>
          </Link>
          })}
        </div>
      </div>

    </>: <Loading/>
  ) 
}

export default Home