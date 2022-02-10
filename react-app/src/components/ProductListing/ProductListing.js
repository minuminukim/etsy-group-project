import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/productReducer';
import ProductDetails from '../ProductDetails';
import Carousel from '../Carousel';
import ButtonWithIcon from '../ButtonWithIcon';
import './ProductListing.css';

const ProductListing = ({ sessionId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { productId } = useParams();
  // const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    return dispatch(getSingleProduct(productId))
      .then((res) => setProduct(res))
      .then(() => setIsLoading(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          console.log('errors', data.errors);
        }
      });
  }, [dispatch]);

  return isLoading ? null : (
    <div className="page-container product-listing">
      <div className="product-listing-main">
        <Carousel images={product.images} alt={product.title} />
      </div>
      <div className="product-listing-side">
        <ProductDetails product={product} sessionId={sessionId} />
      </div>
    </div>
  );
  // return 'hello';
};

export default ProductListing;
