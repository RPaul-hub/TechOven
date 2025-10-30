import NotFoundPage from '@/app/not-found';
import { products } from '../../../lib/product-data';
import ProductDetailCard from '@/components/product-detail-card';


async function ProductDetailPage({params}: {params: {id: string}}) {

    const resolvedParams = await Promise.resolve(params);
    const productdetails = products.find(product => product.id === resolvedParams.id);

    if(!productdetails){
        return <NotFoundPage />
    }

    return <ProductDetailCard productdetails={productdetails} />;

}   

export default ProductDetailPage;