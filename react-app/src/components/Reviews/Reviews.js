import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import { BsStarFill } from "react-icons/bs"
import "./Reviews.css"


const GetReviews = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user);
  const reviews = useSelector(state => state.review.reviews);
  // TODO - rename state hooks
  const [test, setTest] = useState(false)
  const [edit, setEdit] = useState(true)
  const [rating, setRating] = useState(0)
  const [body, setBody] = useState("")
  const [test2, setTest2] = useState(0)
  const [rerender, setRerender] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [errors, setErrors] = useState([])
  let { productId } = useParams()


  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(sessionActions.deleteReview(id))
    setTest(!test)
  }

  const handleEdit = (e) => {
    setDisplayEdit(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()

    setRerender(!rerender)
    setEdit(true)

    if (body.length && rating > 0) setDisplayEdit(false)

    const payload = {
      user_id: currentUser.id,
      product_id: productId,
      rating,
      body,
      review_id: test2
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
          <div>
            {errors.body}
            <div>
              {errors.rating}
            </div>
          </div>
          <textarea
            id="review_body"
            value={body}
            // required
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
    dispatch(sessionActions.getReviews(productId))

  }, [dispatch, test, rerender])

  useEffect(() => {
    dispatch(sessionActions.getReviews(productId))

  }, [dispatch, test, rerender])

  return (
    <>
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
          {review.user_id === currentUser?.id && displayEdit ? editForm : null}

          {review.user_id === currentUser?.id && edit === true ?
            <button
              className="btn"
              id="deleteReviewBtn"
              value={review.id}
              onClick={(e) => {
                setTest2(e.target.value)
                handleEdit()
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
