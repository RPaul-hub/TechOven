'use client';
import { Product } from "../lib/product-data";
import Image from "next/image";
import { useState, useEffect } from 'react';

function ProductDetailCard({productdetails}: {productdetails: Product | undefined}) {
    
    const [mainImage, setMainImage] = useState<string | null>(null);

    useEffect(() => {
        setMainImage(productdetails?.imageUrl1 || '');
    }, []);

    if(!productdetails)
        return false

    return (
        <div className='flex flex-row pt-10'>
            <div>
                <div className='relative w-[350px] h-[350px] ml-auto mr-auto'>
                    <Image src={mainImage?mainImage:''} alt={productdetails.name} width={250} height={250} className='h-full w-full rounded-lg'/>
                </div>
                <div className='mt-4 grid grid-cols-4 gap-2'>
                    <div className='relative w-[100px] h-[100px] ml-auto mr-auto'>
                        <Image src={productdetails.imageUrl1?productdetails.imageUrl1:''} alt={productdetails.name} onClick={() => setMainImage(productdetails.imageUrl1)}
                        width={100} height={100} className='h-full w-full rounded-lg'/>
                    </div>
                    <div className='relative w-[100px] h-[100px] ml-auto mr-auto'>
                        <Image src={productdetails.imageUrl2?productdetails.imageUrl2:''} alt={productdetails.name} onClick={() => setMainImage(productdetails.imageUrl2)}
                        width={100} height={100} className='h-full w-full rounded-lg'/>
                    </div>
                    <div className='relative w-[100px] h-[100px] ml-auto mr-auto'>
                        <Image src={productdetails.imageUrl3?productdetails.imageUrl3:''} alt={productdetails.name} onClick={() => setMainImage(productdetails.imageUrl3)}
                        width={100} height={100} className='h-full w-full rounded-lg'/>
                    </div>
                    <div className='relative w-[100px] h-[100px] overflow-hidden ml-auto mr-auto'>
                        <Image src={productdetails.imageUrl4?productdetails.imageUrl4:''} alt={productdetails.name} onClick={() => setMainImage(productdetails.imageUrl4)}
                        width={100} height={100} className='h-full w-full rounded-lg'/>
                    </div>
                </div>
            </div>
            <div className="w-[50%] ml-auto mr-auto">
                <h2 className="text-2xl font-bold mb-4">{productdetails?.name}</h2>
                <p className="text-yellow-500 mb-4">Rating: {productdetails?.rating} ★</p>
                
                <p>{productdetails?.description}</p>

                <div className="flex items-center mt-5">
                    <span className="text-3xl font-semibold">${productdetails?.offerprice}</span>
                    <span className="ml-3 text-sm line-through text-gray-500">${productdetails?.originalprice}</span>
                </div>
                <div className='flex mt-5'>
                    <button className="p-3 bg-amber-700 text-white rounded-lg hover:cursor-pointer">Add to Cart</button>
                    <button className="ml-4 p-3 bg-blue-950 text-white rounded-lg hover:cursor-pointer">Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailCard;