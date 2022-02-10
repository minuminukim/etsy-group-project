import './ProductThumbnail.css';

const ProductThumbnail = ({ i, src, alt, onClick, selected = false }) => {
  return (
    <div className="product-thumbnail">
      <img
        id={`${alt}-image-${i}`}
        src={src}
        alt={alt}
        className={selected ? 'selected' : null}
        onClick={onClick}
      />
    </div>
  );
};

export default ProductThumbnail;
