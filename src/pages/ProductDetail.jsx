import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const {id} = useParams();
    console.log({id});
    

  return (
    <div className=' text-center justify-center m-auto p-20 text-3xl flex flex-col w-1/2'>
      <h2 className='p-8 bg-black text-white w-full flex text-center justify-center border-spacing-1 border border-gray-400'>Product Detail</h2>
      <p className='p-8 w-full flex text-center justify-center border-spacing-1 border border-gray-400'>Details for Product ID: {id}</p>
    </div>
  )
}

export default ProductDetail
