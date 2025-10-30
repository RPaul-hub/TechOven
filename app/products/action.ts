"use server";

export async function addToCart(productId: string){
    const apiResponse = await fetch(process.env.BASE_URL + "/api/user/1/cart",{
        method: 'POST',
        body: JSON.stringify({
            productId
        }),
        headers: {
            'ContentType' : 'application/json'
        }
    })
    const updatedCartItems = await apiResponse.json();
    return { success: true, cartItems: updatedCartItems };
}

export async function removeFromCart(productId: string){
    const apiResponse = await fetch(process.env.BASE_URL + "/api/user/1/cart",{
        method: 'DELETE',
        body: JSON.stringify({
            productId
        }),
        headers: {
            'ContentType' : 'application/json'
        }
    })
    const updatedCartItems = await apiResponse.json();
    return { success: true, cartItems: updatedCartItems };
}