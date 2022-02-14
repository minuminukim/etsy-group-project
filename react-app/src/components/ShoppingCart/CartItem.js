import './ShoppingCart.css';
import { deleteCartItems } from '../../store/shoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../store/shoppingCart';
import calculateOriginalPrice from '../../utils/calculateOriginalPrice';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartItem = ({ cartItem }) => {
  let session = useSelector((state) => state.session);
  // let cartItemErrors = useSelector((state) => state.session.shoppingCart);
  // const [hasLoadedCart, setHasLoadedCart] = useState(false)
  // const [quantityError, setQuantityError] = useState(false)

  // console.log(cartItemErrors, "fvdfvdf")



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHasLoadedCart(true);
  //   }, 100);
  //   return () => clearTimeout(timer);
  // });

  const dispatch = useDispatch();

  let onSale;

  if (parseInt(cartItem.product_discount, 10) > 0) {
    onSale = cartItem.product_discount;
  }

  const removeItem = () => {
    dispatch(deleteCartItems([cartItem.id]));
  };

  let quantityOptions = () => {
    let quantityArray = [];

    for (let i = 1; i <= parseInt(cartItem.product_stock, 10); i++) {
      quantityArray.push(i);
    }

    return quantityArray;
  };

  let changeQuantity = (e) => {
    dispatch(
      updateQuantity(parseInt(e.target.value, 10), cartItem.id, session.user.id)
    );
  };


  let discountInfo = calculateOriginalPrice(parseInt(cartItem.product_price, 10), parseInt(cartItem.product_discount, 10))

  // const checkErrors = () => {

  //   if (cartItemErrors) {
  //     return <p>You got errors bro.</p>
  //   }
  // }


  return (
    <>
      <div className="cartItemLineBreaker"></div>
      <div className="cartItemContainer">
        <div className="cartItemImageContainer">
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundImage: `url(${cartItem.product_image})`,
              borderRadius: '6px',
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }}
          ></div>
        </div>
        <div className="rightDivCartItem">
          <div className="topHalfCartItemSection">
            <div className="cartItemTitleContainer">
              {cartItem.product_title}
            </div>
            <div className="cartItemQuantityAndPriceSection">
              <div className="quantityAndPriceTextSection">
                <div className="quantityContainer">
                  {/* {hasLoadedCart ? checkErrors() : null} */}
                  {/* {hasLoadedCart && cartItemErrors[cartItem.id].errors ? <p>{cartItemErrors[cartItem.id]["error"]}</p> : null} */}
                  <select
                    name="quantity"
                    id="quantitySelect"
                    // value={quantity}
                    defaultValue={cartItem.quantity}
                    onChange={changeQuantity}
                  >
                    {quantityOptions().map((number) => {



                      return (
                        <option
                          key={uuidv4().toString()}
                          value={number.toString()}
                        >
                          {number}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="priceCartItemContainer">
                  ${cartItem.product_price}
                  {parseInt(cartItem.product_discount, 10) > 0 ? <p>This item was ${discountInfo.original}. You Saved ${discountInfo.saving}</p> : null}
                </div>
              </div>
              <div className="quantityAvailableText"></div>
            </div>
          </div>
          <div className="RemoveAndSaleCartItemSection">
            <div id="removeButtonContainer">
              <button onClick={removeItem} id="removeCartItem">
                {' '}
                Remove{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
