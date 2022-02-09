import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FileInputWithPreview from './FileInputWithPreview';
import Button from '../common/Button';

const ProductImageForm = ({ sessionUser }) => {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [count, setCount] = useState(1);
  const [errors, setErrors] = useState({});
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();
  const { productId } = useParams();

  useEffect(() => {
    if (images.length) {
      const current = images[images.length - 1];
      const objectURL = URL.createObjectURL(current);
      setPreviews([...previews, objectURL]);
    }
  }, [images]);

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
    if (images && images.length) {
      images.forEach((image) => formData.append('images', image));
    }

    setImageLoading(true);

    const res = await fetch(`/api/products/${productId}/product_images`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      await res.json();
      setImageLoading(false);
      history.push(`/products/${productId}`);
    } else {
      setImageLoading(false);
      const data = await res.json();
      console.log('data', data);
      console.log('error');
    }
  };

  const updateImages = (e) => setImages([...images, e.target.files[0]]);

  return (
    <div className="container">
      <h1 className="page-heading">Add a new listing</h1>
      <form onSubmit={handleSubmit} className="product-image-form">
        <h2 className="form-heading">Photos</h2>
        <div className="form-row">
          <div className="form-label-details">
            <p className="form-label-details">
              Use up to five photos to show your item's most important
              qualities.
              <br /> Tips:
            </p>
            <ul>
              <li>Use natural light and no flash.</li>
              <li>Include a common object for scale.</li>
              <li>Show the item being held or used.</li>
              <li>Shoot against a clean, simple background.</li>
              <li>
                Add photos to your variations so buyers can see all their
                options.
              </li>
            </ul>
          </div>
          <div className="image-preview-grid">
            <FileInputWithPreview
              index="0"
              src={previews[0]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="1"
              src={previews[1]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="2"
              src={previews[2]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="3"
              src={previews[3]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="4"
              src={previews[4]}
              onChange={updateImages}
            />
          </div>
        </div>
        <Button label="Submit" className="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default ProductImageForm;
