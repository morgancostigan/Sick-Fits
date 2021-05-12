import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';

export default function ProductPage() {
    const { query  } = useRouter();
    
    return (
        <div>
            <Pagination page={query.page || 1}/>
            <Products />
            <Pagination page={query.page || 1}/>
        </div>
    );
};