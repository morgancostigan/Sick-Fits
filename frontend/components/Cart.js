import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from '../components/styles/Supreme';
import CartItem from '../components/CartItem';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';

// function CartItem({ cartItem }) {
//     return <li>{cartItem.id}</li>;

// }


export default function Cart() {
    const me = useUser();
    const { cartOpen, closeCart } = useCart();
    if(!me) return null;
    // console.log({me});
    
    return <CartStyles open={cartOpen}>
        <header>
            <CloseButton onClick={closeCart}>&times;</CloseButton>
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
        <footer>
            <p>
                {formatMoney(calcTotalPrice(me.cart))}
            </p>
        </footer>
    </CartStyles>
}