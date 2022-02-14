import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
// import { BsStarFill } from "react-icons/bs"
// import { AiOutlineStar } from "react-icons/ai"
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
  const [errors, setErrors] = useState([])
  const [hover, setHover] = useState(0);
  const [displayDelete, setDisplayDelete] = useState(true)
  let { productId } = useParams()



  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(sessionActions.deleteReview(id))
    setTest(!test)
  }

  const handleEdit = (e) => {
    e.preventDefault()
    setDisplayEdit(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

    setTest(!rerender)

    if (body.length > 1 && rating > 0) {
      setDisplayEdit(false)
      setDisplayDelete(true)
      setEdit(true)
      setErrors([])

    }

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
          <div id="edit-form-btns">
            <button className="btn" onClick={(e) => {
              setRerender(!rerender)
            }}>Update</button>
            <button onClick={(e) => {
              setEdit(true)
              setDisplayEdit(false)
              setDisplayDelete(true)
            }} className="btn">Cancel</button>
          </div>
        </form>

        {/* <button onClick={(e) => {
          setEdit(true)
          setDisplayEdit(false)
        }} className="btn">Cancel</button> */}
      </>
    )
  }


  useEffect(() => {
    dispatch(sessionActions.getReviews(productId, currentUser?.id))
  }, [dispatch, test, rerender, edit, currentUser.id, productId])

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId, currentUser?.id))
  }, [dispatch, test, rerender, edit, currentUser.id, productId])

  return (
    <div id="reviews-main-container">
      <div id="reviews-title">
        <p>Reviews for this item <span id="total-reviews-num">{reviews?.reviews?.length}</span></p>
      </div>
      {/* Review Form Component */}
      <div id="review-form-container">
        {userExists ? null : <ReviewForm />}
      </div>

      {/* All reviews for currently display listing */}
      <div id="reviews-container">
        {reviews?.reviews?.map(review => (
          <div id="review-container" key={`review-container-${review?.id}`}>
            <div id="review-row1">
              <img className="profile-pic review-pic" src={review.profile_picture_url} alt={`${review.username}-profile-pic`} />
              <div key={review.user} id="review-author">{review.username}</div>
              <div key={review.updated_at} id="review-date">{`${review.updated_at.split(' ')[2]} ${review.updated_at.split(' ')[1]}, ${review.updated_at.split(' ')[3]}`}</div>
            </div>

            <div id="review-row2">
              <span className={`stars stars-${review.rating}`}></span>
              <div id="review" key={review.body}>{review.body}</div>
            </div>

            {/* Only display deleteBtn for a review by currentUser */}
            <div id="review-form-container">
              {review.user_id === currentUser?.id ? editForm : null}
            </div>
            <div id="review-row3">
              {review.user_id === currentUser?.id && edit === true ?
                <button
                  className="btn"
                  value={review.id}
                  onClick={(e) => {
                    setEditReviewId(e.target.value)
                    handleEdit(e)
                    setEdit(false)
                    setDisplayDelete(false)
                  }}>
                  Edit
                </button>
                : null}

              {review.user_id === currentUser?.id && displayDelete ?
                <button className="btn" id="deleteReviewBtn" onClick={(e) => {
                  handleDelete(e, review.id)
                }} value={review.id}>Delete</button>
                : null}
            </div>



          </div>
        ))}
      </div>



    </div>
  )
}


export default GetReviews
