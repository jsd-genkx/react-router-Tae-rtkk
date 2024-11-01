import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const {id} = useParams();
    console.log({id});
    

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Details for Product ID: {id}</p>
    </div>
  )
}

export default ProductDetail
