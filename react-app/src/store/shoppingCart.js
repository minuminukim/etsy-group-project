//constants
const LOAD_CART = 'shoppingCart/LOAD_CART';
const SINGLE_DELETE = 'shoppingCart/SINGLE_DELETE';
const MULTIPLE_DELETE = 'shoppingCart/MULTIPLE_DELETE';
const UPDATE_QUANTITY = 'shoppingCart/UPDATE_QUANTITY';
const ADD_TO_CART = 'shoppingCart/ADD_TO_CART';
const ITEM_ERRORS = 'shoppingCart/ITEM_ERRORS';
/*--------------------------------------------------------------------*/
//Action Creators

const loadCartItems = (cartItems) => ({
  type: LOAD_CART,
  payload: cartItems,
});

const deleteOneCartItem = (itemId) => ({
  type: SINGLE_DELETE,
  payload: itemId,
});

const deleteAllCartItems = () => ({
  type: MULTIPLE_DELETE,
});

const updateCartQuantity = (quantity) => ({
  type: UPDATE_QUANTITY,
  payload: quantity,
});

const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const updateItemErrors = (itemErrors) => ({
  type: ITEM_ERRORS,
  payload: itemErrors,
});

/*--------------------------------------------------------------------*/
//THUNKS

export const get_cart_items = (id) => async (dispatch) => {
  const response = await fetch(`/api/mycart/${id}`);

  if (response.ok) {
    const data = await response.json();

    dispatch(loadCartItems(data['cart_items'])); // dispatch action creator

    return data;
  }
};

export const deleteCartItems = (itemstoDelete) => async (dispatch) => {
  /*

    pass in an object as body of request that looks like this

    {
        items: [1, 3, 5]
    }

    if itemstoDelete.length is equal to 1, then dispatch deleteOneCartItem
    else:
    dispatch deleteAllCartItems
    */

  const response = await fetch('/api/mycart/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: itemstoDelete,
    }),
  });

  if (response.ok) {
    if (itemstoDelete.length === 1) {
      dispatch(deleteOneCartItem(itemstoDelete[0]));
    } else if (itemstoDelete.length > 1) {
      dispatch(deleteAllCartItems());
    }
  } else {
    return;
  }
};

export const updateQuantity =
  (quantity, cartItemId, userId) => async (dispatch) => {
    const response = await fetch(`/api/mycart/${cartItemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    });

    if (response.ok) {
      dispatch(get_cart_items(userId));

      return 'it should have worked';
    }
  };

export const addToCartThunk =
  (productId, quantity, userId) => async (dispatch) => {
    const response = await fetch(`/api/mycart/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
        user_id: userId,
        product_id: productId,
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return 'you have some errors.';
    } else {
      dispatch(addToCart(data));

      return 'Success';
    }
  };

/*--------------------------------------------------------------------*/
// REDUCER

const initialState = {};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      let newCart = {};

      action.payload.forEach((item) => {
        newCart[item.id] = item;
      });

      return newCart;

    case MULTIPLE_DELETE:
      return {};

    case SINGLE_DELETE:
      const updateState = {
        ...state,
      };

      delete updateState[`${action.payload}`];

      return updateState;

    case ADD_TO_CART:
      const newState = { ...state };

      newState[action.payload.id] = action.payload;

      return newState;

    case ITEM_ERRORS:
      const newStateAgain = { ...state };

      let oldObject = newStateAgain[`${action.payload[0]}`];

      newStateAgain[`${action.payload[0]}`] = {
        ...oldObject,
        errors: action.payload[1],
      };

      return newStateAgain;

    default:
      return state;
  }
};

export default shoppingCartReducer;
