const LOAD_PRODUCTS = 'product/loadProducts';
const ADD_PRODUCT = 'product/addProduct';
const EDIT_PRODUCT = 'product/editProduct';
const REMOVE_PRODUCT = 'product/removeProduct';

const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product,
});

const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  productId,
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

export const getAllProducts = () => async (dispatch) => {
  const response = await fetch(`/api/products`);

  if (response.status >= 400) {
    throw response;
  }

  const data = await response.json();
  console.log('data in reducer', data);
  dispatch(loadProducts(data.products));
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

export const deleteProduct = (productId) => async (dispatch) => {
  const response = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status >= 400) {
    console.log('productId', productId);
    throw response;
  }

  dispatch(deleteProduct(productId));
  return response;
};

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const productsObject = action.products.reduce((acc, p) => {
        acc[p.id] = p;
        return acc;
      });
      return {
        ...state,
        ...productsObject,
      };
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
    case REMOVE_PRODUCT:
      const newState = { ...state };
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default productReducer;
