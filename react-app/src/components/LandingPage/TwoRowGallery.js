import ProductImage from '../ProductImage';
import './TwoRowGallery.css';

const TwoRowGallery = ({ products, isLoading }) => {
  const toLandscape = (i) => {
    switch (i) {
      case 0:
        return true;
      case 1:
        return false;
      case 2:
        return true;
      case 3:
        return false;
      case 4:
        return false;
      case 5:
        return true;
      case 6:
        return false;
      case 7:
        return true;
    }
  };

  return (
    <div className="products-gallery">
      {!isLoading &&
        products.length > 0 &&
        products.map((item, i) => (
          <ProductImage
            key={item.title}
            shape={toLandscape(i) ? 'landscape' : 'square'}
            src={item.images[0]}
            price={item.price}
            id={item.id}
            i={i}
          />
        ))}
    </div>
  );
};

export default TwoRowGallery;
