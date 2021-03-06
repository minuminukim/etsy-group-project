import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleProduct } from '../../store/productReducer';
import ProductDetails from '../ProductDetails';
import Carousel from '../Carousel';
import Accordion from '../Accordion';
import splitStringToArray from '../../utils/splitStringToArray';
import './ProductListing.css';
import AddToCart from '../ShoppingCart/AddToCart';

const ProductListing = ({ sessionId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { productId } = useParams();

  useEffect(() => {
    return dispatch(getSingleProduct(productId))
      .then((res) => (res.archived ? history.push('/page-not-found') : res))
      .then((res) => setProduct(res))
      .then(() => setIsLoading(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          history.push('/page-not-found');
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
        <AddToCart product={product} />
        <Accordion
          label="Description"
          content={splitStringToArray(product?.description, ',')}
          list={true}
        />
      </div>
    </div>
  );
};

export default ProductListing;
