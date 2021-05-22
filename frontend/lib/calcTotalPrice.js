export default function calcTotalPrice(cart) {
    return cart.reduce((tally, cartItem) => {
        //in the rare instance a product is deleted but still in your cart 
        if(!cartItem.product) return tally;
        return tally + cartItem.quantity * cartItem.product.price;
    }, 0)
}