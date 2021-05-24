import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const DELETE_PRODUCT_MUTATION = gql`
    mutation DELETE_PRODUCT_MUTATION($id: ID!) {
        deleteProduct(id: $id) {
            id
            name
        }
    }
`;

function update(cache, payload) {
    // console.log({payload});
    console.log('Running update fnction after Delete.');
    //remove payload item from Apollo cache
    cache.evict(cache.identify(payload.data.deleteProduct))
    
}

export default function DeleteProduct({id, children}) {
    const [deleteProduct, {loading}] = useMutation(
        DELETE_PRODUCT_MUTATION, {
            variables: { id },
            update: update,
        }
    );
    return <button 
            type="button"  
            disabled={loading}
            onClick={() => {
        if(confirm('Should we really remove this item from existence?')) {
            //if confirmed, THEN delete
            console.log('gettin it gone!');
            deleteProduct().catch(err => alert(err.message));
        }
    }}>
        {children}
    </button>
};