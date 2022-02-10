import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputField from '../common/InputField';
import FormLabel from '../common/FormLabel';
import FormLabelDetails from '../common/FormLabelDetails';
import Textarea from '../common/Textarea';
import Button from '../common/Button';
import { postProduct, updateProduct } from '../../store/productReducer';
import './ProductListingForm.css';

const ProductListingForm = ({
  sessionUser,
  product = null,
  action = 'post',
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('keyboards');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);
  const [stock, setStock] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // if product is passed in as a prop, form is for PUT request
    // so we set state to it
    if (product !== null) {
      setTitle(product.title);
      setCategory(product.category);
      setDescription(product.description);
      setPrice(product.price);
      setStock(product.stock);
      setDiscount(product.discount);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});

    const params = {
      userId: sessionUser.id,
      id: product?.id,
      title,
      category,
      description,
      price,
      stock,
      discount,
    };

    const actionToDispatch = action === 'post' ? postProduct : updateProduct;

    return dispatch(actionToDispatch(params))
      .then((data) => {
        if (action === 'post') {
          history.push(`/products/${data.id}/images/new`);
        } else {
          history.push(`/products/${data.id}`);
        }
      })
      // .then((data) => history.push(`/products/${data.id}/images/new`))
      .catch(async (res) => {
        const data = await res.json();
        setErrors(data.errors);
      });
  };

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateStock = (e) => setStock(e.target.value);
  const updateDiscount = (e) => setDiscount(e.target.value);

  return (
    <div className="container">
      <h1 className="page-heading">Add a new listing</h1>
      <form onSubmit={handleSubmit} className="product-listing-form">
        <div className="form-section">
          <h2 className="form-heading">Listing details</h2>
          <h3 className="form-caption">
            Tell the world all about your item and why they'll love it.
          </h3>
          <div className="form-input-group">
            <div className="form-input-group-left">
              <FormLabel label="Title *" />
              <FormLabelDetails
                details="Include keywords that buyers would use to
                search for your item."
              />
            </div>
            <div className="form-input-group-right">
              <InputField
                id="title"
                value={title}
                onChange={updateTitle}
                error={errors.title}
              />
            </div>
          </div>
          <div className="form-input-group">
            <div className="form-input-group-left">
              <FormLabel label="Category *" />
              <FormLabelDetails
                details="Choose a category that will help more shoppers
                find your item."
              />
            </div>
            <div className="form-input-group-right">
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
            </div>
          </div>
          <div className="form-input-group">
            <div className="form-input-group-left">
              <FormLabel label="Description" />
              <FormLabelDetails
                details="Start with a brief overview that describes your
              item's finest features. Shoppers will only see the first
              few lines of your description at first, so make it count!
              Not sure what else to say? Shoppers also like hearing about
              your process, and the story behind this item."
              />
            </div>
            <div className="form-input-group-right">
              <Textarea
                label="Description"
                id="description"
                value={description}
                onChange={updateDescription}
                error={errors.description}
                rows="9"
              />
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2 className="form-heading">Inventory and pricing</h2>
          <div className="form-input-group">
            <div className="form-input-group-left">
              <FormLabel label="Price *" />
              <FormLabelDetails
                details="Remember to factor in the costs of materials, labor,
              and other business expenses."
              />
            </div>
            <div className="form-input-group-right">
              <InputField
                id="price"
                type="number"
                placeholder="$19.50"
                value={price}
                onChange={updatePrice}
                error={errors.price}
              />
            </div>
          </div>
          <div className="form-input-group">
            <div className="form-input-group-left">
              <FormLabel label="Stock *" />
              <FormLabelDetails
                details="For quantities greater than one, this listing will
              renew automatically until it sells out."
              />
            </div>
            <div className="form-input-group-right">
              <InputField
                id="stock"
                type="number"
                value={stock}
                onChange={updateStock}
                error={errors.stock}
              />
            </div>
          </div>
          {action === 'put' && (
            <div className="form-input-group">
              <div className="form-input-group-left">
                <FormLabel label="Discount" />
                <FormLabelDetails details="Apply a discount to your product." />
              </div>
              <div className="form-input-group-right">
                <InputField
                  id="discount"
                  type="number"
                  value={discount}
                  onChange={updateDiscount}
                  error={errors.discount}
                />
              </div>
            </div>
          )}
        </div>
        <Button
          label="Save and continue"
          className="submit-button"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ProductListingForm;
