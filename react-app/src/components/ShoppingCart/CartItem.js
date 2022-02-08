import "./ShoppingCart.css"



const CartItem = ({ cartItem }) => {


    let onSale;

    if (parseInt(cartItem.product_discount, 10) > 0) {
        onSale = cartItem.product_discount
    }

    const removeItem = () => {


        /*
        
        import remove car item thunk and dispatch it in here passing in the item
        id of the item to be removed.

        Redux store:

        -make remove Items thunk that removes each item in array.
        - make action creator with type and payload.
        - make reducer.
        
        */
    }


    return (
        <>
            <div className="cartItemLineBreaker"></div>
            <div className="cartItemContainer">
                <div className="cartItemImageContainer">
                    <div style={{ width: "200px", height: "200px", backgroundImage: `url(${cartItem.product_image})`, borderRadius: "6px", backgroundSize: "cover", backgroundPosition: "50% 50%", }}></div>
                </div>
                <div className="rightDivCartItem">
                    <div className="topHalfCartItemSection" >
                    </div>
                    <div className="RemoveAndSaleCartItemSection">
                        <div id="removeButtonContainer">
                            <button onClick={removeItem} id="removeCartItem"> Remove </button>
                        </div>

                        <div> {onSale ? <p>{onSale} sale!!</p> : null}</div>
                    </div>
                </div>

            </div >

        </>

    )
}


export default CartItem;