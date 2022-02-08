//constants
const LOAD_CART = "shoppingCart/LOAD_CART"
const SINGLE_DELETE = "shoppingCart/SINGLE_DELETE"
const MULTIPLE_DELETE = "shoppingCart/MULTIPLE_DELETE"


/*--------------------------------------------------------------------*/
//Action Creators 

const loadCartItems = (cartItems) => ({
    type: LOAD_CART,
    payload: cartItems
})


const deleteOneCartItem = (itemId) => ({
    type: SINGLE_DELETE,
    payload: itemId
})


const deleteAllCartItems = () => ({
    type: MULTIPLE_DELETE,
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

    const response = await fetch("/api/mycart/delete", {
        method: "DELETE",
        body: JSON.stringify({
            items: itemstoDelete
        })
    })

    if (response.message === "deleted") {

        console.log("deleted", "11111111111")
    } else {
        console.log()
    }




}








/*--------------------------------------------------------------------*/
// REDUCER 

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

        case MULTIPLE_DELETE:

            return {

            }

        case SINGLE_DELETE:

            const updateState = {
                ...state
            }

            delete updateState[`${action.payload}`]

            return updateState;

        default:
            return state;
    }

}


export default shoppingCartReducer;