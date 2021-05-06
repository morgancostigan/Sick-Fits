import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from '../components/ErrorMessage';
import Head from 'next/head';

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

export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
        variables: { id }
    });
    if(loading) return <p>Wait for it... Wait for it...</p>;
    if(error) return <DisplayError error={error}/>;
    const { Product } = data;
    console.log({ data, loading, error });
    return (
        <div>
            <Head>
                <title>Sick Fits | {Product.name}</title>
            </Head>
            <img 
                src={Product.photo.image.publicUrlTransformed} 
                alt={Product.photo.altText} 
            />
            <div className="details">
                <h2>{Product.name}</h2>
                <p>{Product.description}</p>
            </div>
        </div>
    )
}