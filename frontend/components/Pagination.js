import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from '../components/ErrorMessage';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta {
            count
        }
    }
`;

export default function Pagination({ page }) {
    const { error, loading, data } = useQuery(PAGINATION_QUERY);
    if(loading) return 'Wait for it...  Wait for it...';
    if(error) return <DisplayError error={error}/>
    // console.log({data});
    const { count } = data._allProductsMeta;
    const totalPages = Math.ceil(count / perPage)
    const currentPage = 
    
    return (
        <PaginationStyles>
            <Head>
                <title>Sick Fits - Page {page} of {totalPages}</title>
            </Head>
            {/* Link to previous
            Link to next 
            Total pages */}
            <Link href="/">◀️ Prev</Link>
            <p>Page __ of {totalPages}</p>
            <p>{count} Total Items</p>
            <Link href="/">Next ▶️</Link>
        </PaginationStyles>
    );
};