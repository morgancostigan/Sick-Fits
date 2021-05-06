import gql from "graphql-tag";
import { useQuery } from '@apollo/client';


const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY {
        Product (where: {
            id: "60943c2b328461ef04ec7a1c"
        }) 
        {
            name
            price
            description
            photo {
                id
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

export default function SingleProduct({ query }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
    console.log({data, loading, error});
    
    return <p>I'm a single product {query.id}!</p>

};