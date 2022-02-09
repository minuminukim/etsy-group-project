import { Link } from 'react-router-dom';
import calculateOriginalPrice from '../../utils/calculateOriginalPrice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // TODO: Figure out what to do while images are loading
  // right now they don't have fallback, so they error
  // maybe build loading spinner component?

  const {
    id,
    title,
    price,
    // discount,
    stock,
    user,
    rating,
    images,
  } = product;

  // currently hardcoded, cause no seed data with discount yet
  let discount = 10;

  const { original } = calculateOriginalPrice(price, discount);

  return (
    <Link className="product-card-wrapper" to={`/products/${id}`}>
      <div className="product-card">
        <div>
          <img className="product-card-img" src={images[0]} alt={title} />
        </div>
        <div>
          <h3 className="product-card-title">{title}</h3>
        </div>
        <div>
          {/* TODO implement star ratings */}
          <span>Rating: {rating}</span>
        </div>
        <div className="product-card-price-details">
          <p className="price-after-discount">{`$${price}`}</p>
          {discount > 0 && (
            <p className="price-before-discount">{`$${original}`}</p>
          )}
          {discount > 0 && (
            <p className="discount-value">{`(${discount}% off)`}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
