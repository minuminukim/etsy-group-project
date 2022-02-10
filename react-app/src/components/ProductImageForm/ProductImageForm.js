import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FileInputWithPreview from './FileInputWithPreview';
import Button from '../common/Button';

const ProductImageForm = ({ sessionUser }) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();
  const { productId } = useParams();

  // TODO: error handling
  // TODO: refactor render func to map, maybe set images def length to five

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
      if (data && data.errors) {
        setErrors([...errors, ...data.errors]);
      }
    }
  };

  const toObjectURL = (file) => URL.createObjectURL(file);
  const updateImages = (e) => setImages([...images, e.target.files[0]]);
  const handleDelete = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    const filtered = images.filter((_item, index) => i !== index);
    setImages(filtered);
  };

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
              index={0}
              src={images.length > 0 ? toObjectURL(images[0]) : null}
              onChange={updateImages}
              onClick={handleDelete}
            />
            <FileInputWithPreview
              index={1}
              src={images.length > 1 ? toObjectURL(images[1]) : null}
              onChange={updateImages}
              onClick={handleDelete}
            />
            <FileInputWithPreview
              index={2}
              src={images.length > 2 ? toObjectURL(images[2]) : null}
              onChange={updateImages}
              onClick={handleDelete}
            />
            <FileInputWithPreview
              index={3}
              src={images.length > 3 ? toObjectURL(images[3]) : null}
              onChange={updateImages}
              onClick={handleDelete}
            />
            <FileInputWithPreview
              index={4}
              src={images.length > 4 ? toObjectURL(images[4]) : null}
              onChange={updateImages}
              onClick={handleDelete}
            />
          </div>
        </div>
        <Button label="Submit" className="submit-button" type="submit" />
      </form>
      {errors.length > 0 && errors.map((e) => e)}
    </div>
  );
};

export default ProductImageForm;
