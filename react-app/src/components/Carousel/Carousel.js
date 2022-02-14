import { useState } from 'react';
import ProductThumbnail from '../ProductThumbnail';
import './Carousel.css';
import ButtonWithIcon from '../ButtonWithIcon';

const Carousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (e) => {
    const index = e.target.id.split('-').pop();
    setCurrentIndex(+index);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex =
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const carouselMainStyle = { backgroundImage: `url(${images[currentIndex]})` };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {images.length &&
          images.map((img, i) => (
            <ProductThumbnail
              key={`${alt}-image-${i}`}
              i={i}
              src={img}
              alt={alt}
              onClick={handleImageClick}
              selected={i === currentIndex}
            />
          ))}
      </div>
      <div className="carousel-main" style={carouselMainStyle}>
        <div className="carousel-buttons">
          <ButtonWithIcon
            className="nav-btn nav-btn-previous"
            size="medium"
            action="previous"
            shape="circle"
            onClick={handlePrevious}
          />
          <ButtonWithIcon
            className="nav-btn nav-btn-next"
            size="medium"
            action="next"
            shape="circle"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
