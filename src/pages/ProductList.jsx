import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {

        const products = [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
          { id: 3, name: 'Product 3' }
        ];

  return (
    <div className=' text-center justify-center m-auto p-20 text-3xl flex flex-col w-1/2'>
      <h2 className='p-8 bg-black text-white w-full flex text-center justify-center border-spacing-1 border border-gray-400'>Product List</h2>
      <ul >{products.map(product => (
        <li key={product.id} className='p-8 border border-gray-400 hover:bg-slate-300'>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProductList
