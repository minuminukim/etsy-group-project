import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./ReviewForm.css"

import { BsStarFill, BsCart4 } from "react-icons/bs"

const CreateReview = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user);
    const [rating, setRating] = useState(0)
    const [body, setBody] = useState("")
    const [displayBtn, setDisplayBtn] = useState(false)
    const [errors, setErrors] = useState([])
    const [test, setTest] = useState(false)
    const reviews = useSelector(state => state.review.reviews);
    let { productId } = useParams()




    const onSubmit = async (e) => {
        e.preventDefault();
        // setTest(!test)

        const payload = {
            user_id: currentUser.id,
            product_id: productId,
            rating,
            body,

        }

        dispatch(sessionActions.newReview(payload)).catch(async (res) => {
            // dispatch(sessionActions.getReviews(productId))


            console.log(res)
            const data = await res.json();
            console.log('THIS IS DATA ----', data)
            if (data.errors) {
                setErrors(data.errors);
            }
        })
        setTest(!test)

    }

    let btn;
    if (displayBtn) {
        btn = (
            <div id="review_btn_container">
                <button className="review-btn" className="btn"
                    onClick={() => {
                        setErrors([])
                        setBody("")
                        setDisplayBtn(false)
                    }}>Reset</button>
                <button className="review-btn" className="btn">Submit</button>
            </div>

        )
    } else {
        btn = (
            null
        )
    }

    useEffect(() => {
        console.log('inside useeffect')
        dispatch(sessionActions.getReviews(productId))
    }, [dispatch, test])

    useEffect(() => {
        // dispatch(sessionActions.newReview(productId))
        dispatch(sessionActions.getReviews(productId))
    }, [dispatch, test])


    return (
        <form id="review_form" onSubmit={onSubmit} value={true}
            onFocus={(e) => {
                setDisplayBtn(true)
            }}>
            <div>
                {errors.body}
                <div>

                    {errors.rating}
                </div>
            </div>
            {/* <label>Rating</label> */}
            <div>
                <BsStarFill
                    onClick={(e) => {
                        setRating(1);
                    }} />
                <BsStarFill
                    onClick={(e) => {
                        setRating(4);
                    }} />
                <BsStarFill
                    onClick={(e) => {
                        setRating(6);
                    }} />
                <BsStarFill
                    onClick={(e) => {
                        setRating(8);
                    }} />
                <BsStarFill
                    onClick={(e) => {
                        setRating(10);
                    }} />
            </div>

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
