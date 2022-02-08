import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get_cart_items } from "../../store/shoppingCart";

const ShoppingCart = () => {

    let session = useSelector(state => state.session)

    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);



    let shoppingCart = useSelector(state => state.shoppingCart);
    let valueArray = Object.values(shoppingCart);

    console.log(valueArray)

    let areThereCartItems;

    useEffect(() => {

        dispatch(get_cart_items(session.user.id)).then(() => setIsLoaded(true));


    }, [dispatch])


    if (isLoaded) {

        if (valueArray.length > 0) {
            areThereCartItems = true
        } else {
            areThereCartItems = false;
        }
    }





    return (
        <div>
            {isLoaded && areThereCartItems ? <h1>{valueArray[0].product_description}</h1> : <h1>no items</h1>}
        </div>
    )
}

export default ShoppingCart; 