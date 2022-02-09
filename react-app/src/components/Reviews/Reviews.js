import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/review"
import "./Reviews.css"

const GetReviews = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user);
    // TODO - fix state in order to not have to do review.reviews (normalize?)
    const reviews = useSelector(state => state.review.reviews);

    const [deleteId, setDeleteId] = useState(1)

    let { productId } = useParams()

    const handleDelete = (e, id) => {
       e.preventDefault();

    //    setDeleteId()

       const res = dispatch(sessionActions.deleteReview(id))
       if (res.id) return 'asdflasjfasdkl'
    }

    let deleteBtn;
    deleteBtn = (
        <button onClick={handleDelete}>Delete</button>
    )

    useEffect(() => {
        dispatch(sessionActions.getReviews(productId))
        // dispatch(sessionActions.deleteReview(deleteId))
    }, [dispatch])

    return (
        // TODO - clean up code, get rid of warnings if possible
        <>
        <h1>REVIEWS</h1>
        <ul>
            {reviews?.reviews.map(review => (
                < >
                <li>-----------------------------------</li>
                <img className="profile-pic" src={review.profile_picture_url} />
                <li>{review.username}</li>
                <li>{review.rating}</li>
                <li>{review.body}</li>
                <li>{review.updated_at}</li>
                {/* Only display deleteBtn for a review by currentUser */}
                <li>{review.id} ID</li>

                    { review.user_id == currentUser.id ?
                     <button onClick={(e) => handleDelete(e, review.id)} value={review.id}>Delete</button>
                     : null }
                <li>-----------------------------------</li>
                </>
            ))}
        </ul>
        </>
    )
}


export default GetReviews
