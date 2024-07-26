import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

const ProductListing = ({products}) => {
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              id={index}  
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              seller={product.seller}
            />
          ))}
        </div>
      );
    }

export default ProductListing;