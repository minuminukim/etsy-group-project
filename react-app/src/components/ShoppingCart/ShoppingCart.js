import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { get_cart_items } from '../../store/shoppingCart';
import CartItem from './CartItem';
import PurchaseCart from './PurchaseCart';
import { NavLink } from 'react-router-dom';
import CartFooter from "./CartFooter";

const ShoppingCart = () => {
    let session = useSelector((state) => state.session);


    const [wasPurchased, setWasPurchased] = useState(false)

    const dispatch = useDispatch();

    const [isLoaded, setIsLoaded] = useState(false);

    let shoppingCart = useSelector((state) => state.shoppingCart);
    let valueArray = Object.values(shoppingCart);

    let areThereCartItems;


    useEffect(() => {
        dispatch(get_cart_items(session.user.id));

    }, [dispatch]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300);
        return () => clearTimeout(timer);
    });

    if (valueArray.length > 0) {
        areThereCartItems = true;
    } else {
        areThereCartItems = false;
    }

    let shoppingCartContent;
    if (areThereCartItems) {
        shoppingCartContent = (
            <>
                <div className="CartItemsAndPurchaserContainer">
                    <div className="CartItemSectionContainer">
                        <div id="numberOfItemsText">
                            {valueArray.length} items in your cart
                        </div>
                        {valueArray.map((item) => (
                            <CartItem key={item.product_title} cartItem={item} />
                        ))}
                    </div>
                    <PurchaseCart cartItems={valueArray} setWasPurchased={setWasPurchased} />
                </div>
            </>
        );
    }

    let noCartItems = (
        <>
            <div className="cartIsEmpty">
                <h1 id="emptyCartText"> Your Cart is empty.</h1>
                <NavLink id="uniqueCartText" exact to="/">
                    {' '}
                    Discover something unique to fill it up
                </NavLink>
            </div>
        </>
    );

    let cartItems = (
        <>
            <div className="mainCartContent">
                {Object.values(shoppingCart).length > 0
                    ? shoppingCartContent
                    : noCartItems}
            </div>
        </>
    );


    return (

        <>

            {wasPurchased ? <h1>Thanks for purchasing!!</h1> : <div className="ShoppingCart">{isLoaded ? cartItems : <div id='loadingCart' > Loading</div>}</div>}
            <CartFooter />

        </>
    )
};

export default ShoppingCart;
