const LOAD_PRODUCTS = 'product/loadProduct';
const ADD_PRODUCT = 'product/addProduct';
const EDIT_PRODUCT = 'product/editProduct';

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product,
});

export const getSingleProduct = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`);

  if (response.status >= 400) {
    throw response;
  }

  const data = await response.json();
  dispatch(addProduct(data));
  return data;
};

export const postProduct = (product) => async (dispatch) => {
  const { userId, title, category, description, price, stock } = product;

  const response = await fetch('/api/products/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      title,
      category,
      description,
      price,
      stock,
    }),
  });

  if (response.status >= 400) {
    throw response;
  }

  const data = await response.json();
  dispatch(addProduct(data));
  return data;
};

export const updateProduct = (product) => async (dispatch) => {
  const response = await fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...product }),
  });

  if (response.status >= 400) {
    throw response;
  }

  const data = await response.json();
  dispatch(editProduct(data));
  return data;
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        [action.product.id]: action.product,
      };
    default:
      return state;
  }
};

export default productReducer;
