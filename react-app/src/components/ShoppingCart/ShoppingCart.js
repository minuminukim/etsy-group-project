import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get_cart_items } from "../../store/shoppingCart";
import CartItem from "./CartItem";


const ShoppingCart = () => {

    let session = useSelector(state => state.session)

    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);



    let shoppingCart = useSelector(state => state.shoppingCart);
    let valueArray = Object.values(shoppingCart);


    let areThereCartItems;

    // useEffect(() => {

    //     dispatch(get_cart_items(session.user.id))


    // }, [dispatch])


    if (valueArray.length > 0) {
        areThereCartItems = true
    } else {
        areThereCartItems = false;
    }


    let shoppingCartContent;
    if (areThereCartItems) {

        shoppingCartContent = (
            <>
                <div id="numberOfItemsText">{valueArray.length} items in your cart</div>
                {valueArray.map((item) => <CartItem key={item.product_title} cartItem={item} />)}
            </>
        )

    }


    let noCartItems = (
        <h1>Your Cart is Empty.</h1>
    )


    return (
        <div className="ShoppingCart">
            <div className="mainCartContent">
                {areThereCartItems ? shoppingCartContent : noCartItems}

            </div>
        </div>
    )
}

export default ShoppingCart; 