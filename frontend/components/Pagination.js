import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta {
            count
        }
    }
`;

export default function Pagination({ page }) {
    const { error, loading, data } = useQuery(PAGINATION_QUERY);
    return (
        <PaginationStyles>
            <Head>
                <title>Sick Fits - Page {page} of ___</title>
            </Head>
            {/* Link to previous
            Link to next 
            Total pages */}
            <Link href="/">◀️ Prev</Link>
            <p>Page __ of __</p>
            <p>__ Total Items</p>
            <Link href="/">Next ▶️</Link>
        </PaginationStyles>
    );
};