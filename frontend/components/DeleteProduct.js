import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!) {
        deleteProduct($id) {
            id
            name
        }
    }
`;

export default function DeleteProduct({id, children}) {
    return <button type="button" onClick={() => {
        if(confirm('Should we really remove this item from existence?')) {
            //if confirmed, THEN delete
            console.log('gettin it gone!');
            
        }
    }}>
        {children}
    </button>
};