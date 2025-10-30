import PageHeading from "@/components/page-heading";
import ProductListCard from "../../components/product-list-card";
import { Product } from "../../lib/product-data";
import Link from 'next/link';

const ProductsPage = async () => {

    const apiResponse = await fetch(process.env.BASE_URL + "/api/products");
    const products = await apiResponse.json();

    const apiResponseCart = await fetch(process.env.BASE_URL + "/api/user/1/cart",{
        cache: 'no-cache'
    })
    const cartItems = await apiResponseCart.json();

    return (
        <>
            <PageHeading heading="All Products" subheading="Lorem ipsum dollar sit amet consectetur"/>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-10">
                    {products.map((product : Product) => (
                        <Link href={"/products/" + product.id} key={product.id}>
                            <ProductListCard product={product} initialcartItems={cartItems}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsPage;