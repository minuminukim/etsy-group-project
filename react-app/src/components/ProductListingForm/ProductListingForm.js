import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from '../common/InputField';
import { postProduct } from '../../store/productReducer';

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
    <form onSubmit={handleSubmit} className="product-listing-form">
      <h2>Listing details</h2>
      <InputField
        label="Title"
        id="title"
        size="medium"
        value={title}
        onChange={updateTitle}
        error={errors.title}
      />
      <label>
        Category
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
      <InputField
        label="Description"
        id="description"
        size="medium"
        value={description}
        onChange={updateDescription}
        error={errors.description}
      />
      <h2>Inventory and pricing</h2>
      <InputField
        label="Price"
        id="price"
        size="medium"
        type="number"
        value={price}
        onChange={updatePrice}
        error={errors.price}
      />
      <InputField
        label="Stock"
        id="stock"
        size="medium"
        type="number"
        value={stock}
        onChange={updateStock}
        error={errors.stock}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ProductListingForm;
