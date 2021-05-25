import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const ADD_TO_CART_MUTATION = gql`
    mutation ADD_TO_CART_MUTATION( $id: ID!) {
        addToCart (productId: $id){
            id
            quantity
        }
    }
`;

export default function AddToCart({id}) {
    const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
        variables: { id: id }
    })
    return <button type="button">Add</button>
    
}