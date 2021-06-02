import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import RemoveButton from './styles/RemoveButton';

const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(id: $id){
            id
            # __typename - this comes automatically
        }
    }
`;

function update(cache, payload) {    
    cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }) {
    const [removeFromCart, { loading }] = useMutation(
        REMOVE_FROM_CART_MUTATION, {
            variables: {id},
            //named simply update, because updateCart didn't work.  is this an apollo thing?
            update,
            // optimistic response breaks the app for now.
            // optimisticResponse: {
            //     deleteCartItem: {
            //         __typename: 'CartItem',
            //         id,
            //     },
            // },
    });
    return <RemoveButton 
        onClick={removeFromCart}
        disabled={loading}
        aria-busy={loading}
        type="button" 
        title="remove this item from cart">
        &times;</RemoveButton>
};