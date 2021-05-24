import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid var(--lightGrey);
    display: grid;
    grid-template-columns: : auto 1fr auto;
    img {
        width: 100px;
        margin-right: 1rem;
    }
    h3, p {
        margin: 0;
    }
`;

export default function CartItem({cartItem}) {
    const { product } = cartItem;
    const pic = cartItem.product.photo.image.publicUrlTransformed;
    // console.log({cartItem});
    
    return (
        <CartItemStyles>
            <img src={pic} alt={cartItem.name}/>
            <div>
                <h3>{product.name}</h3>
                <p>
                    {formatMoney(product.price * cartItem.quantity)} subtotal
                </p>
                <p>
                    <em>{cartItem.quantity} &times; {formatMoney(product.price)} each</em>
                </p>
            </div>

        </CartItemStyles>
    )
};