import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./Reviews.css"

const GetReviews = () => {
    const dispatch = useDispatch()
    // TODO - fix state in order to not have to do review.reviews (normalize?)
    const reviews = useSelector(state => state.review.reviews);

    let { productId } = useParams()

    useEffect(() => {
        dispatch(sessionActions.getReviews(productId))
    }, [dispatch])

    return (
        <>
        <h1>REVIEWS</h1>
        <ul>
            {reviews?.reviews.map(review => (
                < >
                <li>-----------------------------------</li>
                <li>USERNAME: {review.username}</li>
                <li>RATING: {review.rating}</li>
                <li>{review.body}</li>
                <li>{review.updated_at}</li>
                <li>-----------------------------------</li>
                </>
            ))}
        </ul>
        </>
    )
}


export default GetReviews
