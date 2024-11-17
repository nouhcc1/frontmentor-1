"use client";

import Image from 'next/image';
import { useCart } from '../context/CartContext';

type Products = {
  image: {
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};


const ProductCard = ({ product }: { product: Products }) => {
  const { addToCart,getProductCount } = useCart();
  
  const handleClick = () => {
    addToCart({ name: product.name, count: getProductCount(product.name), price: product.price, image: product.image.desktop});
  };
  const handleClickMinus = () => {
    addToCart({ name: product.name, count: getProductCount(product.name)-2, price: product.price, image: product.image.desktop});
  };

  return (
    <div className="p-1 max-w-sm overflow-hidden">
      <Image
        className={`outline outline-[3px] w-full rounded-lg object-cover ${getProductCount(product.name) > 0 ? "outline outline-[3px] outline-amber-600":"outline-white"}`}
        src={product.image.desktop}
        alt={product.name}
        width={750}
        height={750}
      />
      <div className="flex items-center justify-center w-full ">
        {getProductCount(product.name)  > 0 ? (
          <div
            className="px-2 transform -translate-y-1/2 w-2/3 py-3 rounded-full grid grid-cols-3 items-center place-items-center bg-redbutton"
           
          >
            <Image
              className="flex items-center justify-center p-1 col-span-1 w-5 h-5 rounded-full border border-white hover:cursor-pointer"
              src="/assets/images/icon-decrement-quantity.svg"
              alt={product.name}
              width={24}
              height={24}
              onClick={handleClickMinus}
            />
            <span className="col-span-1 text-white text-sm xs:text-xs mxs:text-sm">{getProductCount(product.name)}</span>
            <Image
              className="flex items-center justify-center p-1 col-span-1 w-5 h-5 rounded-full border border-white hover:cursor-pointer"
              src="/assets/images/icon-increment-quantity.svg"
              alt={product.name}
              width={24}
              height={24}
              onClick={handleClick}
            />
          </div>
        ) : (
          <button
            className="outline outline-1 outline-slate-300 transform -translate-y-1/2 w-2/3 rounded-full bg-white py-3 flex items-center justify-center hover:outline hover:outline-2 hover:outline-amber-600 hover:text-amber-600"
            onClick={handleClick}
          >
            <span className="flex text-sm items-center justify-center w-full xs:text-xs mxs:text-sm">
              <Image
                className="w-5 h-5 mr-2"
                src="/assets/images/icon-add-to-cart.svg"
                alt={product.name}
                width={16}
                height={16}
              />
              Add to Cart
            </span>
          </button>
        )}
      </div>
      <div className="transform -translate-y-4 ">
        <span className="text-xs font-semibold text-colorsub uppercase tracking-wide">{product.category}</span>
        <h2 className="text-md line-clamp-1 font-bold text-colorsub800">{product.name}</h2>
        <p className="text-md font-semibold text-amber-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
