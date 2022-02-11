import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import './ProductImage.css';

const ProductImage = ({ shape, src, alt, price, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className={`product-image product-image-${shape}`}>
        <img
          src={src}
          alt={alt}
          className={`product-image product-image-${shape}`}
        />
        <Badge className="price-badge" text={`$${price}`} />
      </div>
    </Link>
  );
};

export default ProductImage;
