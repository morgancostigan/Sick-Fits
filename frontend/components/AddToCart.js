import gql from "graphql-tag";


const ADD_TO_CART_MUTATION = gql`
    mutation


`;

const ADD_TO_CART_MUTATION = gql`
    mutation ADD_TO_CART_MUTATION(
        # which variables (and their types) are passed in?
        $productId: ID!
    ) {
        addToCart (productId: $productId){
            id
            quantity
        }
    }
`;

export default function AddToCart() {
    
}