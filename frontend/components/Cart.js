import CartStyles from './styles/CartStyles';
import Supreme from '../components/styles/Supreme';
import CartItem from '../components/CartItem';
import { useUser } from './User';

// function CartItem({ cartItem }) {
//     return <li>{cartItem.id}</li>;

// }


export default function Cart() {
    const me = useUser ();
    if(!me) return null;
    console.log({me});
    
    return <CartStyles open>
        <header>
            <Supreme>
                {me.name}'s cart
            </Supreme>
        </header>
        <ul>
            {me.cart.map((cartItem) => <CartItem 
            key={cartItem.id} 
            cartItem={cartItem}
            />)}
        </ul>
    </CartStyles>
}