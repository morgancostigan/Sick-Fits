import ItemStyles from '../components/styles/ItemStyles';
import Title from '../components/styles/Title';
import PriceTag from '../components/styles/PriceTag';
import AddToCart from '../components/AddToCart';
import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

export default function Product({ product }) {
    return (
        <ItemStyles>
            <img 
                src={product?.photo?.image?.publicUrlTransformed} 
                alt={product.name} 
            />   
            <Title>
                <Link href={`/product/${product.id}`}>{product.name}</Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
            {/* TODO add edit and delete buttons */}
            <div className="buttonList">
                <Link href={{
                    pathname: 'update',
                    query: {
                        id: product.id
                    }

                }}>
                    Edit
                </Link>
                <AddToCart />
                <DeleteProduct id={product.id}>
                    Delete

                </DeleteProduct>
            </div>
        
        
        </ItemStyles>
    )
}