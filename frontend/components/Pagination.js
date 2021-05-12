import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';
import Link from 'next/link';

export default function Pagination({ page }) {
    return (
        <PaginationStyles>
            <Head>
                <title>Sick Fits - Page {page} of ___</title>
            </Head>
            <p>Pagination</p>
            {/* Link to previous
            Link to next 
            Total pages */}
            <Link></Link>
        </PaginationStyles>
    );
};