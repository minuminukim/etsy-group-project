import Button from '../common/Button';
import { addToCartThunk } from '../../store/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthModals from '../auth/AuthModals';

const AddToCart = ({ product }) => {
<<<<<<< HEAD
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const [isInStock, setIsInStock] = useState(false);

  useEffect(() => {
    if (sessionUser) {
      setIsSignedIn(true);
=======
    const history = useHistory()
    const dispatch = useDispatch();
    const [isSignedIn, setIsSignedIn] = useState(false)
    const sessionUser = useSelector((state) => state.session.user);
    const [isInStock, setIsInStock] = useState(false)





    useEffect(() => {

        if (sessionUser) {
            setIsSignedIn(true)
        }

        if (product.stock > 0) {
            setIsInStock(true)
        }
    }, [sessionUser, product.stock])



    const [selected, setSelected] = useState(1)

    const {
        id,
        stock,
    } = product;


    console.log(product)

    let quantityOptions = []
    for (let i = 1; i <= parseInt(stock, 10); i++) {
        quantityOptions.push(i)
>>>>>>> main
    }

    if (product.stock > 0) {
      setIsInStock(true);
    }
  });

  const [selected, setSelected] = useState(1);

  const { id, title, price, stock, user } = product;

  let quantityOptions = [];
  for (let i = 1; i <= parseInt(stock, 10); i++) {
    quantityOptions.push(i);
  }

  const addToCart = async () => {
    if (sessionUser) {
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

  return (
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
  );
};

export default AddToCart;
