import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import './ProductImage.css';

const ProductImage = ({ shape, src, price, id, i }) => {
  const style = { backgroundImage: `url(${src})` };
  return (
    <Link to={`/products/${id}`} id={`product-image-${i}`}>
      <div className="product-image-wrapper">
        <div className={`product-image product-image-${shape}`} style={style}>
          <Badge className="price-badge" text={`$${price}`} />
        </div>
      </div>
    </Link>
  );
};

export default ProductImage;
