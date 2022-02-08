import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FileInputWithPreview from './FileInputWithPreview';
import Button from '../common/Button';

const ProductImageForm = ({ sessionUser }) => {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [count, setCount] = useState(1);
  const [errors, setErrors] = useState({});
  const [imageLoading, setImageLoading] = useState(false);
  const history = useHistory();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  useEffect(() => {
    if (images && images[0]) {
      setPreviews([]);
      console.log('previews', previews);
      console.log('images', images);
      const objectURLs = images.reduce((acc, img) => {
        return [...acc, URL.createObjectURL(img)];
      }, []);
      console.log('objectURLs', objectURLs);
      setPreviews([...previews, ...objectURLs]);
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
    formData.append('image', image);

    setImageLoading(true);

    const res = await fetch(`/api/products/${productId}/product_images`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      await res.json();
      setImageLoading(false);
      history.push('/');
    } else {
      setImageLoading(false);
      const data = await res.json();

      console.log('error');
    }
  };

  // const updateImage = (e) => {
  //   const file = e.target.files[0];
  //   console.log('@@@@@@@@@@@@@@@@', e.target.files);
  //   setImage(file);
  // };

  const updateImages = (e) => {
    setImages([]);
    const files = [...e.target.files];
    console.log('files', files);
    const userImages = files.reduce((acc, f) => [...acc, f], []);
    console.log('userImages', userImages);
    setImages([...userImages]);
  };

  return (
    <div className="container">
      <h1 className="page-heading">Add a new listing</h1>
      <form onSubmit={handleSubmit} className="product-image-form">
        <h2 className="form-heading">Photos</h2>
        <div className="form-row">
          <div className="input-field-details">
            <p className="input-field-details">
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
              index="0"
              src={previews[1]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="0"
              src={previews[2]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="0"
              src={previews[3]}
              onChange={updateImages}
            />
            <FileInputWithPreview
              index="0"
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
