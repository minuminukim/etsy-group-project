import ProductCard from '../ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
    </div>
  );
};

export default ProductGrid;
