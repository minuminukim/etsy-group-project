import { AiOutlineConsoleSql } from "react-icons/ai";

const CREATE_REVIEW = 'session/CREATE_REVIEW';
const GET_REVIEWS = 'session/GET_REVIEWS';
const DELETE_REVIEW = 'session/DELETE_REVIEW'

const createReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

const fetchReviews = (reviews) =>({
    type: GET_REVIEWS,
    payload: reviews
})

const deleteAReview = (id) => ({
    type: DELETE_REVIEW,
    payload: id
})

const initialState = { reviews: null};


export const newReview = (payload) => async (dispatch) => {

    const response = await fetch("/api/reviews/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: payload.user_id,
            product_id: payload.product_id,
            rating: payload.rating,
            body: payload.body
        })
    });
    console.log('INSIDE THUNK RES', response)

    if (response.status >= 400) {
        console.log('INSIDE THUNK 400')

        throw response;
    }


    if (response.ok) {
        console.log('INSIDE THUNK')
        const createdReview = await response.json();
        // if (createdReview.errors) {
        //     // console.log('INSIDE THUNK')
        //     return createdReview.errors;
        // }
        dispatch(createReview(createdReview))

        return createReview;
    }
}


export const getReviews = (product_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${product_id}`, {
        method: "GET"
    })
    const data = await response.json()
    dispatch(fetchReviews(data))
}


export const deleteReview = (review_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(deleteAReview(review_id))
        return data
    }
}


export default function reviewsReducer(state = initialState, action){
    // TODO - need to figure out how to update state correctly?
    switch(action.type) {
        case GET_REVIEWS:
            return {...state, reviews: action.payload}
        case CREATE_REVIEW:
            console.log(action.payload)
            const newState = { ...state };
            newState.reviews.reviews.unshift(action.payload)
            return newState
            // return { ...newState, review: { reviews: [action.payload, ...newState.review.reviews.reviews] } }

            // return { ...newState, review: { reviews: { reviews: [...action.payload, ...review.reviews.reviews] } } }

            case DELETE_REVIEW:
                const one = {...state}
                // console.log(action)
                // console.log('STATE', state)
                // console.log(state.reviews.reviews[0])
                const newReviews = one.reviews.reviews.filter(review => review.id !== +action.payload)
                // console.log(newNotes)
                one.reviews.reviews = newReviews;
            return one
        default:
            return state
    }
}
