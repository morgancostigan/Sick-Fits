import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import { useUser } from './User';
import { useCart } from '../lib/cartState';
import SignOut from '../components/SignOut';


export default function Nav() {
    const user = useUser();
    const { cartOpen, closeCart, openCart } = useCart();

    // console.log({user});
    
    return (
        <NavStyles>
            <Link href="/products">Products</Link>
            {/* if signed in */}
            { user && ( <>
                        <Link href="/sell">Sell</Link>
                        <Link href="/orders">Orders</Link>
                        <Link href="/account">Account</Link>
                        {/* <Link href="/cart">Cart</Link> */}
                        <SignOut />
                <button type="button" onClick={openCart}>🛒</button>
            </> )}
            {/* if not signed in */}
            { !user && ( <>
                <Link href="/signin">Sign In</Link>
            </> )}
        </NavStyles>
    );
}; 