import { connectToDB } from "../dbconnection"

export const GET = async () => {

    const { db } = await connectToDB();
    const products = await db.collection('products').find({}).toArray();

    return new Response(JSON.stringify(products),{
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const POST = async () => {
    return new Response("Thanks for posting to this handler",{status: 200})
}