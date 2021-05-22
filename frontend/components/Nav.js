import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import { useUser } from './User';
import SignOut from '../components/SignOut';


export default function Nav() {
    const user = useUser();
    console.log({user});
    
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
            </> )}
            {/* if not signed in */}
            { !user && ( <>
                <Link href="/signin">Sign In</Link>
            </> )}
        </NavStyles>
    );
}; 