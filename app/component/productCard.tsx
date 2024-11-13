"use client";

import Image from 'next/image'
import React, { useState } from 'react'
type Product = {
  image: {
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (//hover:shadow-xl transition-shadow duration-300
    <div className=" max-w-sm overflow-hidden ">
      <Image className="w-full rounded-lg object-cover" 
      src={product.image.desktop} alt={product.name} width={192} height={192}/>
        <div className="flex items-center justify-center w-full ">
        {count > 0  
            ? <button className="shadow-sm shadow-slate-500 transform -translate-y-1/2  px-4 py-2 rounded-full grid grid-cols-6 items-center bg-red-700 " onClick={handleClick}>
                <Image className="p-1 col-span-1 w-5 h-5 rounded-full border border-white" src="/assets/images/icon-decrement-quantity.svg" alt={product.name} width={24} height={24}/>
                <span className="col-span-4 text-white ">{count}</span>
                <Image className="p-1 col-span-1 w-5 h-5  rounded-full border border-white" src="/assets/images/icon-increment-quantity.svg" alt={product.name} width={24} height={24}/>
              </button>
            : <button 
                  className="shadow-sm shadow-slate-500 transform -translate-y-1/2 rounded-full bg-white px-4 py-2 flex items-center justify-center hover:border hover:border-amber-600"
                  onClick={handleClick}
                >
                <span className='flex items-center justify-center w-full hover:text-amber-600'><Image className="w-4 h-4 mr-2" src="/assets/images/icon-add-to-cart.svg" alt={product.name} width={16} height={16}/>Add to Cart</span>  
              </button>
            }
        </div>
      <div className="">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">{product.category}</span>   
        <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
        <p className="text-xl font-semibold text-amber-600">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
