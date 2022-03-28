import Button from '../common/Button';
import { addToCartThunk } from '../../store/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthModals from '../auth/AuthModals';
import { get_cart_items } from '../../store/shoppingCart';

const AddToCart = ({ product }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const shoppingCart = useSelector((state) => state.shoppingCart)
  const cartValues = Object.values(shoppingCart)
  const [isInStock, setIsInStock] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    if (sessionUser) {
      setIsSignedIn(true);
      dispatch(get_cart_items(sessionUser.id))
    }
    if (product.stock > 0) {
      setIsInStock(true);
    }

    if (product.user_id === sessionUser?.id) {
      setIsOwner(true);
    }
  }, [sessionUser, product.stock, product.user_id, dispatch]);

  const [selected, setSelected] = useState(1);

  const { id, stock } = product;

  let quantityOptions = [];
  for (let i = 1; i <= parseInt(stock, 10); i++) {
    quantityOptions.push(i);
  }

  const addToCart = async () => {
    if (sessionUser) {

      for (let i = 0; i < cartValues.length; i++) {
        if (cartValues[i].product_id === product.id) {

          if (selected + cartValues[i].quantity > +product.stock) {
            setErrors(`You already have ${cartValues[i].quantity} item(s) of this product in your cart. Please add less than or equal to ${+product.stock - cartValues[i].quantity} items.`)
            return;
          }
        }
      }

      let response = await dispatch(
        addToCartThunk(id, selected, sessionUser.id)
      );

      if (response === 'Success') {
        history.push('/mycart');
      }
    } else {
      setIsSignedIn(false);
    }
  };

  let signInToViewCart = (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '30px',
          marginBottom: '15px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {' '}
          Please Sign in below to add item to cart.
        </div>
        <div
          style={{
            textDecoration: 'underline',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AuthModals />
        </div>
      </div>
    </>
  );

  let productIsInStock = (
    <>
      <div style={{ color: "red", height: "50px" }}> {errors}</div>
      <div id="quantityLabel"> Quantity </div>
      <select
        name="quantity"
        id="addToCartQuantity"
        defaultValue={'1'}
        onChange={(e) => setSelected(parseInt(e.target.value), 10)}
      >
        {quantityOptions.map((number) => {
          return (
            <option key={number.toString()} value={number.toString()}>
              {number}
            </option>
          );
        })}
      </select>
      {isSignedIn ? (
        <Button
          label={'Add to Cart'}
          className="addToCart"
          onClick={addToCart}
        />
      ) : (
        signInToViewCart
      )}
    </>
  );

  // console.log(product)

  return (
    <>
      {!isOwner && (
        <>
          {isInStock ? (
            productIsInStock
          ) : (
            <div
              style={{
                marginTop: '20px',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              Out of Stock.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AddToCart;
