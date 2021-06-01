import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import RemoveButton from './styles/RemoveButton';

const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(id: $id){
            id
        }
    }
`;

export default function RemoveFromCart({ id }) {
    const [removeFromCart, { loading }] = useMutation(
        REMOVE_FROM_CART_MUTATION, 
        {variables: {id: id}}
        )
    return <RemoveButton 
        onClick={removeFromCart}
        disabled={loading}
        aria-busy={loading}
        type="button" 
        title="remove this item from cart">
        &times;</RemoveButton>
}