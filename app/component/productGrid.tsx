import React, { Fragment } from 'react'
import ProductCard from './productCard'
import data from '../constent/data.json'

const ProductGrid = () => {
  return (
    <div>
      <h1 className=" p-8 text-4xl text-left font-[family-name:var(--font-geist-mono)"> Desserts</h1>
      <div className="p-4 grid grid-cols-1 gap-3 md:grid-cols-3">
            {data.map(product => (
                <Fragment key={product.name}>
                 <ProductCard product={product}/>
                </Fragment>
                ))}
      </div>
    </div>
  )
}   

export default ProductGrid
