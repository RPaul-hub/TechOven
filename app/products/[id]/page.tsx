import NotFoundPage from '@/app/not-found';
import ProductDetailCard from '@/components/product-detail-card';

export const dynamic = 'force-dynamic';

async function ProductDetailPage({params}: {params: {id: string}}) {

    const resolvedParams = await Promise.resolve(params);
    const apiResponse = await fetch(process.env.BASE_URL + "/api/products/" + resolvedParams.id);
    const productdetails = await apiResponse.json();

    if(!productdetails){
        return <NotFoundPage />
    }

    return <ProductDetailCard productdetails={productdetails} />;

}   

export default ProductDetailPage;