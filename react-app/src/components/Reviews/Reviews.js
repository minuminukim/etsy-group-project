import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
// import { BsStarFill } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import "./Reviews.css"
import ReviewForm from '../ReviewForm/ReviewForm'


const GetReviews = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user);
  const reviews = useSelector(state => state.review.reviews);
  const userExists = useSelector(state => state.review.reviewExists);
  // TODO - rename state hooks
  const [test, setTest] = useState(false)
  const [edit, setEdit] = useState(true)
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState("")
  const [editReviewId, setEditReviewId] = useState(0)
  const [rerender, setRerender] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [userLeftReview, setUserLeftReview] = useState(true)
  const [errors, setErrors] = useState([])
  const [work, setWork] = useState(false)
  let { productId } = useParams()



  const reviewExists = () => {
    reviews?.reviews.forEach(review => {
      if (review?.user_id === currentUser?.id) {
        return setUserLeftReview(true)
      }
    })
    // setUserLeftReview(false)
  }


  // useEffect(() => {
  //   reviewExists()

  // }, [dispatch])

  const handleDelete = (e, id) => {
    e.preventDefault();
    // setDisplayReviewForm(true)
    dispatch(sessionActions.deleteReview(id))
    setTest(!test)
    setUserLeftReview(false)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setDisplayEdit(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

    setTest(!rerender)
    setEdit(true)

    if (body.length && rating > 0) setDisplayEdit(false)

    const payload = {
      user_id: currentUser.id,
      product_id: productId,
      rating,
      body,
      review_id: editReviewId
    }

    dispatch(sessionActions.editForm(payload)).catch(async (res) => {
      const data = await res.json();
      if (data.errors) {
        setErrors(data.errors);
      } else {
        setDisplayEdit(false)
      }
    })
  }

  let editForm;
  if (displayEdit) {
    editForm = (
      <>
        <form id="review_form" onSubmit={handleEditSubmit}>
          <h4>Update Review</h4>

          <div id="star-con">

            <AiOutlineStar
              id="testing123"
              onClick={(e) => {
                setRating(2);
              }} />
            <AiOutlineStar
              id="testing123"
              onClick={(e) => {
                setRating(4);
              }} />
            <AiOutlineStar
              id="testing123"
              onClick={(e) => {
                setRating(6);
              }} />
            <AiOutlineStar
              id="testing123"
              onClick={(e) => {
                setRating(8);
              }} />
            <AiOutlineStar
              id="testing123"
              onClick={(e) => {
                setRating(10);
              }} />
          </div>
          <div>
            {errors.body}
            <div>
              {errors.rating}
            </div>
          </div>
          <textarea
            id="review_body"
            value={body}
            placeholder="Add a public review..."
            onChange={(e) => {
              setBody(e.target.value)
            }}
          ></textarea>
          <button className="btn">Update</button>

        </form>

        <button onClick={(e) => {
          setEdit(true)
          setDisplayEdit(false)
        }} className="btn">Cancel</button>
      </>
    )
  }


  useEffect(() => {
    dispatch(sessionActions.getReviews(productId, currentUser?.id))
    reviewExists()
  }, [dispatch, test, rerender, work, edit])

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId, currentUser?.id))
    reviewExists()

  }, [dispatch, test, rerender, work, edit])

  return (
    <>
      { userExists ? null : <ReviewForm />}

      {reviews?.reviews?.map(review => (
        <div key={`review-container-${review?.id}`} id="review-container">
          <div id="review-row1">
            <img className="profile-pic review-pic" src={review.profile_picture_url} alt={`${review.username}-profile-pic`} />
            <div key={review.user} id="review-author">{review.username}</div>
            <div key={review.updated_at} id="review-date">{`${review.updated_at.split(' ')[2]} ${review.updated_at.split(' ')[1]}, ${review.updated_at.split(' ')[3]}`}</div>
          </div>

          {/* TODO - start rating system */}

          <div id="review-row2">
            <span className={`stars stars-${review.rating}`}></span>
            <div key={review.body}>{review.body}</div>
          </div>

          {/* Only display deleteBtn for a review by currentUser */}
          {review.user_id === currentUser?.id  ? editForm : null}
          {/* {review.user_id === currentUser?.id ? setDisplayReviewForm(true) : setDisplayReviewForm(false)} */}
          {/* remove ReviewForm if review from user exists */}
          {}

          {review.user_id === currentUser?.id && edit === true ?
            <button
              className="btn"
              id="deleteReviewBtn"
              value={review.id}
              onClick={(e) => {
                setEditReviewId(e.target.value)
                handleEdit(e)
                setEdit(false)
              }}>
              Edit
            </button>
            : null}

          {review.user_id === currentUser?.id ?
            <button className="btn" id="deleteReviewBtn" onClick={(e) => {
              handleDelete(e, review.id)
            }} value={review.id}>Delete</button>
            : null}
        </div>
      ))}
    </>
  )
}


export default GetReviews
