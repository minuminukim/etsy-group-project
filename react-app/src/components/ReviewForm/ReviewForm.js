import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as sessionActions from "../../store/review"
import { useParams } from "react-router-dom";

import "./ReviewForm.css"

const CreateReview = ({ setUserLeftReview }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user);
  // const reviews = useSelector(state => state.review.reviews);
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState("")
  const [displayBtn, setDisplayBtn] = useState(false)
  const [errors, setErrors] = useState([])
  const [test, setTest] = useState(false)
  const [displayReviewForm, setDisplayReviewForm] = useState(true)
  let { productId } = useParams()
  const [hover, setHover] = useState(0);
  const [displayStars, setDisplayStars] = useState(false)


  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: currentUser.id,
      product_id: productId,
      rating,
      body,

    }

    dispatch(sessionActions.newReview(payload)).catch(async (res) => {

      const data = await res.json();
      if (data.errors) {
        return setErrors(data.errors);
      }
    }
    )
    if (body && rating > 0) {
      setDisplayReviewForm(false)
    }
    setTest(!test)
  }

  let btn;
  if (displayBtn) {
    btn = (
      <div id="review_btn_container">
        <button className="review-btn btn"
          onClick={() => {
            setErrors([])
            setBody("")
            setDisplayBtn(false)
            setDisplayStars(false)
          }}>Cancel</button>
        <button className="review-btn btn">Submit</button>
      </div>

    )
  } else {
    btn = (
      null
    )
  }

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId))
  }, [dispatch, test, productId])

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId))
  }, [dispatch, test, productId])


  return (
    <>
      {displayReviewForm && currentUser?.id ?
        <form id="review_form" onSubmit={onSubmit} value={true}
          onFocus={(e) => {
            setDisplayBtn(true)
            setDisplayStars(true)
          }}>
          <div>
            {errors.body}
            <div>

              {errors.rating}
            </div>
          </div>





          {displayStars ?

            <div id="star-rating-container">
              {[...Array(5)].map((s, i) => {
                i += 1;
                return (
                  <span

                    key={i}
                    className={i <= (hover || rating) ? "highlight" : "off"}
                    onClick={() => setRating(i)}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="stars">★</span>
                  </span>
                );
              })}
            </div>
            : null}







          <div id='review-pic'>
            <img className="profile-pic" src={currentUser?.profile_pic_url} alt="profile-pic" />
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
        : null}
    </>
  )
}


export default CreateReview
