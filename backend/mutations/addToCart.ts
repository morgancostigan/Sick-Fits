import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from '../.keystone/schema-types';
import { Session } from "../types";

export default async function addToCart(
    root: any, 
    {productID}: {productID: string},
    context: KeystoneContext,
): Promise<CartItemCreateInput> {
    console.log('adding to the damn cart!');
    // query current user for signed in value
    const sesh = context.session as Session;
    if(!sesh.itemId){
        throw new Error('You gotta be logged in to do that!')
    }
    // query their cart
    const allCartItems = await context.lists.CartItem.findMany({
        where: {user: {id: sesh.itemId}, product: {id: productID}}
    });
    // see if item being added is already in cart
    // if yes, increment.  if no, create new CartItem
    
};