import ShoppingCartList from "./shoppingcartlist";

const CartPage = async () => {

    const apiResponse = await fetch(process.env.BASE_URL + "/api/user/1/cart",{
        cache: 'no-cache'
    });
    const cartItems = await apiResponse.json();

    return <ShoppingCartList initialCartItems={cartItems}/>
}   

export default CartPage;