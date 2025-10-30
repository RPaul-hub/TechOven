import {NextRequest} from 'next/server';
import { connectToDB } from '../../dbconnection';

type Params = {
    id: string;
}

export const GET = async (request: NextRequest, {params}:{params: Params}) => {

    const { db } = await connectToDB();

    const resolvedParams = await Promise.resolve(params);
    const productId = resolvedParams.id;

    const product = await db.collection('products').findOne({id: productId});

    if(!product){
        return new Response("Product not fround", {status: 404})
    }

    return new Response(JSON.stringify(product),{
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}