import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import * as sessionActions from "../../store/review"
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"

import "./ReviewForm.css"

const CreateReview = ({setUserLeftReview}) => {
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


  // TODO - fix review form display on refresh when review for use already exists
  // const reviewExists = () => {
  //   reviews?.reviews?.some(review => {
  //     return (review?.user_id === currentUser.id)
  //   })
  // }

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
        setErrors(data.errors);
      } else {
      }
    })
    setDisplayReviewForm(false)
    setUserLeftReview(true)
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
  }, [dispatch, test])

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId))
  }, [dispatch, test])


  return (
    <>
      {displayReviewForm && currentUser?.id ?
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
          <div>
            <AiOutlineStar
              id="testing123"
              className="s1"
              onClick={(e) => {
                setRating(1);
              }} />
            <AiOutlineStar
              id="testing123"
              className="s2"
              onClick={(e) => {
                setRating(4);
              }} />
            <AiOutlineStar
              id="testing123"
              className="s3"
              onClick={(e) => {
                setRating(6);
              }} />
            <AiOutlineStar
              id="testing123"
              className="s4"
              onClick={(e) => {
                setRating(8);
              }} />
            <AiOutlineStar
              id="testing123"
              className="s5"
              onClick={(e) => {
                setRating(10);
              }} />
          </div>

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
