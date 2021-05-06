import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from '../components/ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product (where: {
            id: $id
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

export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: { id }
    });
    if(loading) return <p>Wait for it... Wait for it...</p>;
    if(error) return <DisplayError error={error}/>;
    console.log({ data, loading, error });
    return <div>
        <h2>{data.Product.name}</h2>
    </div>
}