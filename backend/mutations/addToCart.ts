import { KeystoneContext } from "@keystone-next/types";

export default function addToCart(
    root: any, 
    {productID}: {productID: string},
    context: KeystoneContext,
){
    console.log('adding to the damn cart!');
    

};