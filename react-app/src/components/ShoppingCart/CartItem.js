import "./ShoppingCart.css"
import { deleteCartItems } from "../../store/shoppingCart";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    let onSale;

    if (parseInt(cartItem.product_discount, 10) > 0) {
        onSale = cartItem.product_discount
    }

    const removeItem = () => {
        dispatch(deleteCartItems([cartItem.id]))
    }

    let quantityOptions = () => {

        let quantityArray = []

        for (let i = 1; i <= parseInt(cartItem.product_stock, 10); i++) {
            quantityArray.push(i)
        }

        return quantityArray
    }

    let changeQuantity = () => {
        console.log("hello")
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
                        <div className="cartItemTitleContainer"> Text</div>
                        <div className="cartItemQuantityAndPriceSection">
                            <div className="quantityAndPriceTextSection">
                                <div className="quantityContainer">
                                    <select name="quantity" id="quantitySelect" value={cartItem.quantity} onChange={changeQuantity}>
                                        {quantityOptions().map((number) => {

                                            return <option key={number.toString()} value={number.toString()}>{number}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="priceCartItemContainer"></div>
                            </div>
                            <div className="quantityAvailableText"></div>
                        </div>
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