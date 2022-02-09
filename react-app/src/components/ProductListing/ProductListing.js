import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../store/productReducer';
import ProductDetails from '../ProductDetails';

const ProductListing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    const data = dispatch(getSingleProduct(productId));
  }, [dispatch]);
  return product?.title || 'hello';
  // return 'hello';
};

export default ProductListing;
