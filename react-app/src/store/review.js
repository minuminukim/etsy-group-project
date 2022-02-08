
const CREATE_REVIEW = 'session/CREATE_REVIEW';

const createReview = (review) => ({
    type: CREATE_REVIEW,
    payload: review
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


export default function reviewsReducer(state = initialState, action){
    // TODO - need to figure out how to update state correctly?
    switch(action.type) {
        case CREATE_REVIEW:
            const newState = { ...state };
            newState.reviews = action.payload
            return { ...state, reviews: action.payload }
        default:
            return state
    }
}
