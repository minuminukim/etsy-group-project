import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/productReducer';
import ProductDetails from '../ProductDetails';

const ProductListing = () => {
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
        console.log('res', res);
        const data = await res.json();
        if (data && data.errors) {
          console.log('errors', data.errors);
        }
      });
  }, [dispatch]);
  console.log('loading', isLoading);
  return isLoading ? (
    null
  ) : (
    <div className="page-container">
      <ProductDetails product={product} />
    </div>
  );
  // return 'hello';
};

export default ProductListing;
