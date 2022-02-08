import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import * as sessionActions from "../store/review"

const CreateReview = () => {
    const currentUser = useSelector(state => state.session.user);
    const [rating, setRating] = useState(0)
    const [body, setBody] = useState("")

    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(rating);
        // console.log(body)
        // console.log(currentUser)

        const payload = {
            user_id: currentUser.id,
            product_id: 1,
            rating,
            body,

        }
        console.log(payload)

        return dispatch(sessionActions.newReview(payload))
    }

    return (
        <form onSubmit={onSubmit}>
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

            <label>Review</label>
            <textarea
            value={body}
            onChange={(e) => {
                setBody(e.target.value)
            }}
            >
            </textarea>

            <button>Submit</button>
        </form>
    )
}


export default CreateReview
