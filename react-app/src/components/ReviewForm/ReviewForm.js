import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./ReviewForm.css"

const CreateReview = () => {
    const currentUser = useSelector(state => state.session.user);
    const [rating, setRating] = useState(0)
    const [body, setBody] = useState("")
    const [displayBtn, setDisplayBtn] = useState(false)
    let { productId } = useParams()


    console.log('IM IN REVIEWFORM')
    console.log(currentUser.profile_pic_url)

    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id: currentUser.id,
            product_id: productId,
            rating,
            body,

        }

        return dispatch(sessionActions.newReview(payload))
    }

        let btn;
        if (displayBtn) {
            btn = (
                <div id="review_btn_container">
                    <button className="review-btn" className="btn"
                        onClick={() => {
                            setBody("")
                            setDisplayBtn(false)
                        }}>Reset</button>
                    <button className="review-btn" className="btn">Submit</button>
                </div>

            )
        } else {
            btn =(
                null
            )
        }

    return (
        <form id="review_form" onSubmit={onSubmit} value={true}
        // onBlur={() => {
        //     setBody("")
        //     setDisplayBtn(false)
        // }}
        onFocus={(e)=> {
            setDisplayBtn(true)
        }}>
            <label>Rating</label>
            <select
            value={rating}
            onChange={(e) => {
                setRating(e.target.value);
            }}
            id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <div id='review-pic'>

            <img id="profile-pic" src={currentUser.profile_pic_url}></img>

            {/* <label>Add a public review...</label> */}
            <textarea
            id="review_body"
            placeholder="Add a public review..."
            maxLength="1000"
            value={body}
            onChange={(e) => {
                setBody(e.target.value)
            }}
            >
            </textarea>
            </div>
            {/* <input type="button" value="Clear" onclick="javascript:eraseText();" /> */}

            {btn}
        </form>
    )
}


export default CreateReview
