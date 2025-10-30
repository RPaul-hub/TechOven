import { connectToDB } from '@/app/api/dbconnection'
import { products } from '@/lib/product-data'
import { NextRequest } from 'next/server'

type ShoppingCart = Record<string, string[]>

type Params = {
    id: string
}

type CartBody = {
    productId: string
}

const shoppingcarts : ShoppingCart = {
    '1' : ['dfgdf-dsgdfgh-dfh', 'sdgsdfgh-sdgsgh-sdg', 'ryery-sdgsdg-xccb'],
    '2' : ['asdasd-asdasd-asdas', 'qweqwe-qweqwe-qwe'],
    '3' : ['zxcvbn-zxcvbn-zxcv']
}

// fetching cart for specifi user
export const GET = async (request: NextRequest, {params} : {params: Params}) => {

    const { db } = await connectToDB();

    const resolvedParams = await Promise.resolve(params);
    const userId = resolvedParams.id;

    const userCart = await db.collection('cartitems').findOne({ userId });

    if(userCart === undefined){
        return new Response(JSON.stringify([]),{
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const cartIds = userCart.productids;
    const cartproducts = await db.collection('products').find({ id: { $in: cartIds} }).toArray();

    return new Response(JSON.stringify(cartproducts),{
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

// adding new item to cart

export const POST = async (request: NextRequest, {params} : {params: Params}) => {

    const { db } = await connectToDB();

    const resolvedParams = await Promise.resolve(params);
    const userId = resolvedParams.id;

    const body: CartBody = await request.json();
    const productId = body.productId;

    const updateCart = await db.collection('cartitems').findOneAndUpdate(
        { userId },
        { $push: {productids: productId} },
        { upsert: true, returnDocument: 'after'}
    )

    const cartProducts = await db.collection('products').find({ id: { $in: updateCart.productids} }).toArray();

    return new Response(JSON.stringify(cartProducts),{
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

// delete an item from cart

export const DELETE = async (request: NextRequest, {params} : {params: Params}) => {

    const resolvedParams = await Promise.resolve(params);
    const userid = resolvedParams.id;

    const body: CartBody = await request.json();
    const productId = body.productId;

    if(shoppingcarts[userid] === undefined){
        return new Response("No cart items fround for the user!", {status: 404})
    }

    if(!shoppingcarts[userid].includes(productId)){
        return new Response("product is not found in the cart!", {status: 404})
    }

    shoppingcarts[userid] = shoppingcarts[userid].filter(p => p !== productId);
    const cartProducts = shoppingcarts[userid].map(id => products.find(p => p.id === id))

    return new Response(JSON.stringify(cartProducts),{
        status: 202,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}