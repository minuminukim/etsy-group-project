// const SEARCH_PRODUCT = 'search/searchProducts';
// const LOAD_PRODUCTS = 'search/loadProducts'

// export const searchProduct = (query) => ({
//     type: SEARCH_PRODUCT,
//     payload: query
//   });

// export const loadProducts = (products) => {
//     return {
//         type: LOAD_PRODUCTS,
//         products
//     }
// }


// export const searchAllProducts = (query) => async (dispatch) => {
//     const response = await fetch('/api/search', {
//         method: "POST",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             query
//         })
//     })
//     const data = await response.json();
//     dispatch(loadProducts(data))
// }


// const searchReducer = (state = {}, action) => {
//     switch (action.type) {
//         case LOAD_PRODUCTS:
//             return {...action.products}
//         default:
//             return state;
//     }
// }

// export default searchReducer;
