const CREATE_REVIEW = 'session/CREATE_REVIEW';
const GET_REVIEWS = 'session/GET_REVIEWS';
const DELETE_REVIEW = 'session/DELETE_REVIEW'
const EDIT_REVIEW = 'session/EDIT_REVIEW'

const createReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

const fetchReviews = (reviews, haveuserleftreview) =>({
    type: GET_REVIEWS,
    payload: reviews,
    reviewExists: haveuserleftreview
})

const deleteAReview = (id) => ({
    type: DELETE_REVIEW,
    payload: id
})

const updateReview = (id) => ({
    type: EDIT_REVIEW,
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
    if (response.status >= 400) {
        throw response;
    }

    if (response.ok) {
        const createdReview = await response.json();
        dispatch(createReview(createdReview))

        return createReview;
    }
}


export const editForm = (payload) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${payload.review_id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: payload.user_id,
            product_id: payload.product_id,
            rating: payload.rating,
            body: payload.body,
            review_id: payload.review_id
        })
    });
    if (response.status >= 400) {
        throw response;
    }
    if (response.ok) {
        const createdReview = await response.json();
        dispatch(updateReview(createdReview))
        return createReview;
    }
}


export const getReviews = (product_id, user_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${product_id}`, {
        method: "GET"
    })
    const data = await response.json()
    let haveuserleftreview = false

    data.reviews.forEach(review => {
        if (review.user_id === user_id) {
            haveuserleftreview = true
        }
    })
    dispatch(fetchReviews(data, haveuserleftreview))
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
    switch(action.type) {
        case GET_REVIEWS:
            return {...state, reviews: action.payload, reviewExists: action.reviewExists}
        case CREATE_REVIEW:
            const newState = { ...state };
            newState.reviews.reviews.unshift(action.payload)
            return newState
        case DELETE_REVIEW:
            const one = {...state}
            const newReviews = one.reviews.reviews.filter(review => review.id !== +action.payload)
            one.reviews.reviews = newReviews;
        return one
        case EDIT_REVIEW:   {
            const newState = { ...state};
            newState.reviews.reviews.forEach((review, i ,arr) => {
                if (review.id === action.payload.id) {
                    arr[i] = action.payload
                }
            })
            return newState;
          }
        default:
            return state
    }
}
