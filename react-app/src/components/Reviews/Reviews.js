import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./Reviews.css"

import { BsStarFill } from "react-icons/bs"


const GetReviews = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.review.reviews);
    // TODO - rename state hooks
    const [test, setTest] = useState(false)
    const [edit, setEdit] = useState(false)
    const [rating, setRating] = useState(0)
    const [body, setBody] = useState("")
    const [test2, setTest2] = useState(0)
    const [rerender, setRerender] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(true)
    let { productId } = useParams()


    const handleDelete = (e, id) => {
        e.preventDefault();
        dispatch(sessionActions.deleteReview(id))
        setTest(!test)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        setDisplayEdit(true)
        setRerender(!rerender)

        const payload = {
            user_id: currentUser.id,
            product_id: productId,
            rating,
            body,
            review_id: test2
        }

        dispatch(sessionActions.editForm(payload))
    }

    let editForm;
    if (edit){
        editForm = (
            <form id="review_form" onSubmit={handleEditSubmit}>
                <h3>Update Review</h3>


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
                <textarea
                id="review_body"
                value={body}
                required
                placeholder="Add a public review..."
                onChange={(e) => {
                    setBody(e.target.value)
                }}
                ></textarea>
                <button className="btn">Update</button>
            </form>
        )
    }


    let deleteBtn;
    deleteBtn = (
        <button onClick={handleDelete}>Delete</button>
    )

    useEffect(() => {
        dispatch(sessionActions.getReviews(productId))

    }, [dispatch, test, rerender])

    useEffect(() => {
        dispatch(sessionActions.getReviews(productId))

    }, [dispatch, test, rerender])

    return (
        <>
        <ul>
            {reviews?.reviews?.map(review => (
                <div id="review-container" value={review.id}>
                    <div id="review-row1">
                        <img className="profile-pic review-pic" src={review.profile_picture_url} />
                        <li id="review-author">{review.username}</li>
                        <li id="review-date">{`${review.updated_at.split(' ')[2]} ${review.updated_at.split(' ')[1]}, ${review.updated_at.split(' ')[3]}`}</li>
                    </div>

                    {/* TODO - start rating system */}

                    <div id="review-row2">
                      <span className={`stars stars-${review.rating}`}></span>
                      <li>{review.body}</li>
                    </div>

                    {/* Only display deleteBtn for a review by currentUser */}
                    {review.user_id == currentUser.id && edit? editForm : null}

                    { review.user_id == currentUser.id && displayEdit?
                      <button
                      className="btn"
                      id="deleteReviewBtn"
                      value={review.id}
                      onClick={(e) => {
                        handleEdit()
                       }}
                       onClick={(e) => {
                         setTest2(e.target.value)
                         handleEdit(false)
                         setDisplayEdit(false)
                       }}>
                         Edit
                      </button>
                      : null }

                    { review.user_id == currentUser.id ?
                     <button  className="btn" id="deleteReviewBtn" onClick={(e) => {
                        handleDelete(e, review.id)
                     }} value={review.id}>Delete</button>
                     : null }
                </div>
            ))}
        </ul>
        </>
    )
}


export default GetReviews
