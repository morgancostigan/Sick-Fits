import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product (where: {
            id: $id
        }) 
        {
            id
            name
            price
            description
            photo {
                id
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ) {
        updateProduct (
            id: $id,
            data: {
                id: $id,
                name: $name,
                description: $description,
                price: $price,
            }
        ) {
            id
            name
            description
            price
        }
    }
`;
 

export default function UpdateProduct({id}) {

    //TODO
    //get existing product
    const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
        variables: {id},
    });
    console.log({data});
    
    //mutation to update
    //for to handle updates

    return <p>Update {id}</p>;
}