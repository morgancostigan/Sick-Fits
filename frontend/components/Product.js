import ItemStyles from '../components/styles/ItemStyles';
import Title from '../components/styles/Title';
import PriceTag from '../components/styles/PriceTag';
import Link from 'next/link';

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
            <PriceTag>{product.price}</PriceTag>

        
        
        </ItemStyles>
    )
}