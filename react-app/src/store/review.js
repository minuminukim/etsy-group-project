const CREATE_REVIEW = 'session/CREATE_REVIEW';
const GET_REVIEWS = 'session/GET_REVIEWS';

const createReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
})

const fetchReviews = (reviews) =>({
    type: GET_REVIEWS,
    payload: reviews
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

    if (response.ok) {
        const createdReview = await response.json();
        dispatch(createReview(createdReview))
        return null;
    }
}


export const getReviews = (product_id) => async (dispatch) => {
    console.log('INSIDE THUNK')
    const response = await fetch(`/api/reviews/${product_id}`, {
        method: "GET"
    })
    const data = await response.json()
    dispatch(fetchReviews(data))
}


export default function reviewsReducer(state = initialState, action){
    // TODO - need to figure out how to update state correctly?
    switch(action.type) {
        case GET_REVIEWS:
            return {...state, reviews: action.payload}
        case CREATE_REVIEW:
            const newState = { ...state };
            newState.reviews = action.payload
            return { ...state, reviews: action.payload }
        default:
            return state
    }
}
