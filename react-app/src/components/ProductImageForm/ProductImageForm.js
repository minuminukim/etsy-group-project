import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../common/Button';

const ProductImageForm = ({ sessionUser }) => {
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(1);
  const [errors, setErrors] = useState({});
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  const generateImageURL = (title) => {
    const split = title.trim().toLowerCase().split(' ');
    split.push(count);
    setCount(count + 1);
    // count += 1;
    return split.join('-');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    setImageLoading(true);

    const res = await fetch(`/api/products/${productId}/product_images`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      await res.json();
      console.log('oik@@@@@@@@@@@@@@@@@@@@@@@@');
      setImageLoading(false);
      history.push('/');
    } else {
      setImageLoading(false);
      const data = await res.json();
      console.log('@@@@@@@@@@@@@@@@@', data);
      console.log('error');
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".png,.jpg,.jpeg,.gif" onChange={updateImage} />
      <Button label="Submit" className="submit-button" type="submit" />
    </form>
  );
};

export default ProductImageForm;
