const ADD_PRODUCT = 'product/addProduct';

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const postProduct = (product) => async (dispatch) => {
  const { userId, title, category, description, price, stock } = product;

  const response = await fetch('/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: { user_id: userId, title, category, description, price, stock },
  });

  const data = await response.json();
  dispatch(addProduct(data.product));

  return response;
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      };
    default:
      return state;
  }
};

export default productReducer;
