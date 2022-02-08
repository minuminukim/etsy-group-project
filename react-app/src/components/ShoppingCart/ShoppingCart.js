import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get_cart_items } from "../../store/shoppingCart";

const ShoppingCart = () => {

    const dispatch = useDispatch();



    let session = useSelector(state => state.session)

    let shoppingCart = useSelector(state => state.shoppingCart);
    let valueArray = Object.values(shoppingCart);

    console.log(valueArray)

    useEffect(() => {


        // show this to team tomorrow.
        // dispatch(get_cart_items(session.user.id)).then(result => {
        //     console.log(result)
        // })

        dispatch(get_cart_items(session.user.id))


    }, [dispatch])


    let areThereCartItems;

    if (valueArray.length > 0) {
        areThereCartItems = true
    } else {
        areThereCartItems = false;
    }


    return (
        <div>
            {areThereCartItems ? <h1>{valueArray[0].product_description}</h1> : <h1>no items</h1>}
        </div>
    )
}

export default ShoppingCart; 