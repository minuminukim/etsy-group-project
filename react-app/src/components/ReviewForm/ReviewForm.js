import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./ReviewForm.css"

const CreateReview = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user);
    const [rating, setRating] = useState(null)
    const [body, setBody] = useState("")
    const [displayBtn, setDisplayBtn] = useState(false)
    const [errors, setErrors] = useState([])

    let { productId } = useParams()




    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id: currentUser.id,
            product_id: productId,
            rating,
            body,

        }

        // if (rating == null) setErrors('You must give a rating.')
        // if (!body.length) setErrors('Write something')

        // if (errors.length >= 1) {
        //     return null
        // }

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
                <img className="profile-pic" src={currentUser.profile_pic_url} />
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

            {btn}
        </form>
    )
}


export default CreateReview
