import { FaCcMastercard } from "react-icons/fa"
import { FaCcVisa } from "react-icons/fa"
import { SiAmericanexpress } from "react-icons/si"
import { FaCcPaypal } from "react-icons/fa"
import { SiKlarna } from "react-icons/si"


const PurchaseCart = ({ cartItems }) => {

    let totalPrice = 0
    console.log(cartItems, "8989898989898")

    for (let i = 0; i < cartItems.length; i++) {
        totalPrice = totalPrice + parseFloat(cartItems[i].product_price)
    }

    return (
        <div className="cartPurchaseContainer">
            <div className="paymentMethodContainer">
                <p className="howYouPayText"> How you'll Pay</p>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px", alignItems: "center" }}>
                    <input className="paymentInput" type="radio" value="Male" name="gender" />
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                        <FaCcMastercard style={{ fontSize: "40px", marginRight: "10px" }} />
                        <FaCcVisa style={{ fontSize: "40px", marginRight: "10px" }} />
                        <SiAmericanexpress style={{ color: "#2671B9", fontSize: "35px", marginRight: "10px", height: "32px", marginTop: "4px", borderRadius: "2px" }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px", alignItems: "center" }}>
                    <input className="paymentInput" type="radio" value="Female" name="gender" />
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                        <FaCcPaypal style={{ fontSize: "40px", marginRight: "10px", color: "#0079C1" }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px", alignItems: "center" }}>
                    <input className="paymentInput" type="radio" value="Other" name="gender" />
                    <div style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}>
                        <SiKlarna style={{ fontSize: "30px", marginRight: "10px", color: "pink" }} />
                    </div>
                </div>
            </div>
            <div className="cartPriceContainer">
                <div>Item(s) total:
                    {`  $${totalPrice}`}
                </div>
                <div className="shippingCostText"> Shipping: <div className="freeText">FREE</div></div>
            </div>
            <div> </div>

        </div >
    )
}



export default PurchaseCart