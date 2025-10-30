'use client'
import { addToCart, removeFromCart } from '@/app/products/action';
import { Product } from '../lib/product-data';
import Image from 'next/image';
import { useState } from 'react';

function ProductListCard({product, initialcartItems = []}: {product: Product, initialcartItems: Product[]}) {

    const [cartItems, setCartItems] = useState(initialcartItems);

    const addProductToCart = async (productId: string) => {
        const result = await addToCart(productId);
        if(result.success){
            setCartItems(result.cartItems);
        } else{
            alert("failed to add to cart!")
        }
    }

    const removeProductFromCart = async (productId: string) => {
        const result = await removeFromCart(productId);
        if(result.success){
            setCartItems(result.cartItems);
        } else{
            alert("failed to add to cart!")
        }
    }

    const isProductInCart = (productId: string) => {
        return cartItems.some(product => product.id === productId)
    }

    return (
        <div className="hover:shadow-md transition-shadow relative">
            <div className='relative w-[120px] h-[120px] overflow-hidden ml-auto mr-auto'>
                <Image src={product.imageUrl1} alt={product.name} width={250} height={250} className='h-full w-full rounded-lg'/>
            </div>
            <div className='mt-4 p-4'>
                <h2 className="text-base font-semibold mb-1">{product.name}</h2>
                <p className='truncate text-sm'>{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">${product.offerprice}</span>
                    <span className="text-sm line-through text-gray-500">${product.originalprice}</span>
                </div>
            </div>
            {isProductInCart(product.id) ? (
                <button onClick={(e) => {e.preventDefault();removeProductFromCart(product.id)}} 
                    className='absolute top-2 right-2 hover:bg-amber-400 hover:cursor-pointer p-1 px-2 bg-red-700 text-white rounded-md text-xs'>-</button>    
            ) : (
                <button onClick={(e) => {e.preventDefault();addProductToCart(product.id)}} 
                    className='absolute top-2 right-2 hover:bg-amber-400 hover:cursor-pointer p-1 px-2 bg-green-700 text-white rounded-md text-xs'>+</button>
            )}
        </div>
    );
}

export default ProductListCard;