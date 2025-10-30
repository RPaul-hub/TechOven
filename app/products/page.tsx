import PageHeading from "@/components/page-heading";
import ProductListCard from "../../components/product-list-card";
import { products } from "../../lib/product-data";
import Link from 'next/link';

function ProductsPage() {
    return (
        <>
            <PageHeading heading="All Products" subheading="Lorem ipsum dollar sit amet consectetur"/>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-10">
                    {products.map((product) => (
                        <Link href={"/products/" + product.id} key={product.id}>
                            <ProductListCard product={product}/>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductsPage;