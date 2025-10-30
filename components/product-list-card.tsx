import { Product } from '../lib/product-data';
import Image from 'next/image';

function ProductListCard({product}: {product: Product}) {
    return (
        <div className="hover:shadow-md transition-shadow">
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
        </div>
    );
}

export default ProductListCard;