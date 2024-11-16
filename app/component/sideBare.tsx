"use client";
import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

const SideBare = () => {
  const { cartItems,removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  function handleClick(): void {
  }

  return (
    <div className='p-6 mb-8 w-full bg-white rounded-lg'>
      <h1 className='text-2xl font-bold  text-redbutton'>{"Your Cart ("+cartItems.length+")"}</h1>
      {!(cartItems.length>0)?
      <div className='pt-8 grid items-center justify-center w-full space-y-4'>
        <Image className="w-full size-36 " src="/assets/images/illustration-empty-cart.svg" alt="your add" width={24} height={24}/>
        <p className="text-sm text-yellow-800"> Your added items will appear here</p>
      </div>
      :
      <div>
          <ul className="">
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between py-4 col-span-2 border-b border-gray-300">
                <div className="text-sm ">
                  <h1 className="font-bold text-colorsub800 line-clamp-1">{item.name}</h1>
                  <p className="font-semibold text-amber-600">{item.count+"x"}   <span className='text-colorsub'><span className='text-xs font-thin '>@</span>${item.price}</span> <span className='text-colorsub500'>${item.count*item.price}</span></p>
                </div>
                <button onClick={() =>removeFromCart(item.name)}>
                  <Image
                      className="p-1 w-5 h-5 rounded-full border border-colorsub"
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove this item"
                      width={24}
                      height={24}
                    />
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between py-4 col-span-2">
            <span className="text-sm font-semibold text-colorsub700 tracking-wide">Order Total</span>
            <h2 className="text-2xl font-mono font-bold text-colorsub900">${total}</h2>
          </div>
          <div className="px-4 flex flex-col items-center justify-between gap-4">
            <h3 className="p-3 w-full bg-rose-100 bg-opacity-40 rounded-lg flex items-center justify-center gap-2 text-xs text-colorsub700">
              <Image
                  className=" w-5 h-5"
                  src="/assets/images/icon-carbon-neutral.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                This is a<span className="text-xs font-semibold text-colorsub900 tracking-wide">carbon-neutral</span> delivery
              </h3>
            <button
              className=" text-orange-100 w-full rounded-full bg-redbutton py-3 flex items-center justify-center active:bg-red-700"
              onClick={handleClick}
            >
                Confirm Order
            </button>
          </div>
        </div>
        }
   </div>
  );
};

export default SideBare;
