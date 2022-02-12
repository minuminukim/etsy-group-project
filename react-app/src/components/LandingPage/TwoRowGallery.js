import ProductImage from '../ProductImage';
import './TwoRowGallery.css';

const TwoRowGallery = ({ products, isLoading }) => {
  const isEven = (i) => i % 2 === 0;

  return (
    <div className="products-gallery">
      {!isLoading &&
        products.length > 0 &&
        products.map((item, i) => (
          <ProductImage
            key={item.title}
            shape={isEven(i) ? 'landscape' : 'square'}
            src={item.images[0]}
            alt={item.title}
            price={item.price}
            id={item.id}
          />
        ))}
    </div>
  );
};

export default TwoRowGallery;
