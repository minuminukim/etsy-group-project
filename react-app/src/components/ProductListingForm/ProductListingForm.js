import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../common/InputField';
import Textarea from '../common/Textarea';
import { postProduct } from '../../store/productReducer';
import './ProductListingForm.css';

const ProductListingForm = ({ sessionUser }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('keyboards');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});

    const params = {
      userId: sessionUser.id,
      title,
      category,
      description,
      price,
      stock,
    };

    return dispatch(postProduct(params)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        setErrors(data.errors);
      }
    });
  };

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateStock = (e) => setStock(e.target.value);

  return (
    <div className="container">
      <h1 className="page-heading">Add a new listing</h1>
      <form onSubmit={handleSubmit} className="product-listing-form">
        <div className="form-section">
          <h2 className="form-heading">Listing details</h2>
          <h3 className="form-caption">
            Tell the world all about your item and why they'll love it.
          </h3>
          <InputField
            label="Title"
            id="title"
            size="medium"
            value={title}
            onChange={updateTitle}
            error={errors.title}
          />
          <p className="input-field-details">
            Include keywords that buyers would use to search for your item.
          </p>
          <label>
            Category
            <p className="input-field-details">
              Choose a category that will help more shoppers find your item.
            </p>
            <select
              value={category}
              onChange={updateCategory}
              error={errors.category}
            >
              <option value="keyboards">Keyboards</option>
              <option value="switches">Switches</option>
              <option value="keycaps">Keycaps</option>
              <option value="diy_kits">DIY Kits</option>
            </select>
          </label>
          <Textarea
            label="Description"
            id="description"
            size="medium"
            value={description}
            onChange={updateDescription}
            error={errors.description}
            rows="5"
          />
          <p className="input-field-details">
            Start with a brief overview that describes your item's finest
            features. Shoppers will only see the first few lines of your
            description at first, so make it count!
            <br /> Not sure what else to say? Shoppers also like hearing about
            your process, and the story behind this item.
          </p>
        </div>
        <div className="form-section">
          <h2 className="form-heading">Inventory and pricing</h2>
          <InputField
            label="Price"
            id="price"
            size="medium"
            type="number"
            value={price}
            onChange={updatePrice}
            error={errors.price}
          />
          <p className="input-field-details">
            Remember to factor in the costs of materials, labor, and other
            business expenses.
          </p>
          <InputField
            label="Stock"
            id="stock"
            size="medium"
            type="number"
            value={stock}
            onChange={updateStock}
            error={errors.stock}
          />
          <p className="input-field-details">
            For quantities greater than one, this listing will renew
            automatically until it sells out.
          </p>
        </div>
        <input type="submit" value="Save and continue" />
      </form>
    </div>
  );
};

export default ProductListingForm;
