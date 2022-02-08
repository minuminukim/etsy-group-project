import "./ShoppingCart.css"



const CartItem = ({ cartItem }) => {

    return (
        <div className="cartItemContainer">
            <div style={{ width: "200px", height: "200px", backgroundImage: `url(${cartItem.product_image})`, backgroundSize: "cover", backgroundPosition: "50% 50%", }}></div>
            <div>{cartItem.product_title}</div>
            <div>{cartItem.product_title}</div>
            <div>{cartItem.product_price}</div>
        </div >
    )
}


export default CartItem;