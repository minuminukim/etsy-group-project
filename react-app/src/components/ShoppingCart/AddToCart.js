import Button from "../common/Button";
import { addToCartThunk } from "../../store/shoppingCart";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';


const AddToCart = ({ product }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [selected, setSelected] = useState(1)

    const {
        id,
        title,
        price,
        stock,
        user,
    } = product;


    console.log(product)

    let quantityOptions = []
    for (let i = 1; i <= parseInt(stock, 10); i++) {
        quantityOptions.push(i)
    }

    const addToCart = async () => {

        /*
        dispatch my add to cart thunk 
        
        */

        let response = await dispatch(addToCartThunk(id, selected, sessionUser.id))


        console.log(response);

        if (response === "Success") {
            history.push("/mycart")
        }
    }

    return (
        <>
            <div id="quantityLabel"> Quantity </div>
            <select name="quantity" id="addToCartQuantity" defaultValue={"1"} onChange={(e) => setSelected(parseInt(e.target.value), 10)} >
                {quantityOptions.map((number) => {

                    return <option key={number.toString()} value={number.toString()}>{number}</option>
                })}
            </select>
            <Button label={"Add to Cart"} className="addToCart" onClick={addToCart} />

        </>
    )
}

export default AddToCart;