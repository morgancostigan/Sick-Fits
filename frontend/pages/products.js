import Products from '../components/Products';
import Pagination from '../components/Pagination';

export default function ProductPage() {
    return (
        <div>
            <Pagination />
            <Products />
            <Pagination />
        </div>
    );
};