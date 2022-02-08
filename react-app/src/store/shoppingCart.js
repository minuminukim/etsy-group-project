//constants
const LOAD_CART = "shoppingCart/LOAD_CART"




/*--------------------------------------------------------------------*/
//Action Creators 

const loadCartItems = (cartItems) => ({
    type: LOAD_CART,
    payload: cartItems
})










/*--------------------------------------------------------------------*/
//THUNKS

export const get_cart_items = (id) => async (dispatch) => {

    const response = await fetch(`/api/mycart/${id}`)

    if (response.ok) {

        const data = await response.json()



        dispatch(loadCartItems(data["cart_items"])) // dispatch action creator


        return data;
    }


}


const initialState = {

}


const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_CART:

            let newCart = {}

            action.payload.forEach(item => {
                newCart[item.id] = item
            })

            return newCart;


        default:
            return state;
    }

}


export default shoppingCartReducer;