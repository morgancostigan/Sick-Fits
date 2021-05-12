import PaginationStyles from './styles/PaginationStyles';
import Head from 'next/head';


export default function Pagination({ page }) {
    return (
        <PaginationStyles>
            <Head>
                <title>Sick Fits - Page {page} of ___</title>
            </Head>
        </PaginationStyles>
    );
};