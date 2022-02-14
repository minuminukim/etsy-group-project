import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductListingForm from '../ProductListingForm';
import { getSingleProduct } from '../../store/productReducer';

const ProductListingEdit = ({ sessionUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    return dispatch(getSingleProduct(+productId))
      .then((res) => setProduct(res))
      .then(() => setIsLoading(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          console.log('errors', data.errors);
        }
      });
  }, [dispatch]);

  return (
    <ProductListingForm
      sessionUser={sessionUser}
      product={product}
      action="put"
    />
  );
};

export default ProductListingEdit;
