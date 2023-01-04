import { useDispatch } from "react-redux";

// todo:define types
const GET_ALL = "reviews/GET_REVIEW";
const CREATE = "reviews/CREATE_REVIEW";
const EDIT= 'reviews/EDIT_REVIEW';
const DELETE = "reviews/DELETE";
const GET_BY_USER = "reviews/GET_USER_REVIEWS"

// todo:define action creators
const actionGetReviews = (allReviews) => ({
    type: GET_ALL,
    allReviews
})

const actionCreate = (newReview) => ({
    type: CREATE,
    newReview
})

const actionEdit = (review) => {
    return {
        type: EDIT,
        review
    }
}
const actionDelete = (reviweId) => ({
    type: DELETE,
    reviweId
})

const actionGetUserReview = (userReviewInfo) => ({
    type: GET_BY_USER,
    userReviewInfo
})

// todo:thunks section
export const getAllProductReviews = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}/reviews`);

    if (res.ok) {
        const allReviews = await res.json();
        console.log('getall_review_thunk', allReviews)
        dispatch(actionGetReviews(allReviews))
        console.log('review_________thunk', allReviews)
        return allReviews;
    }
}

export const getUserReview = () => async (dispatch) => {
    const res = await fetch('/api/reviews/current');

    if (res.ok) {
        const review = await res.json();
        dispatch(actionGetUserReview(review));
        return review;
    }
}

export const createReviews = (reviewInfo, productId) => async (dispatch) => {

    const resReview = await fetch(`/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewInfo)
    })
    if (resReview.ok) {
        const newReview = await resReview.json()
        console.log('newReview_createReview________thunk', newReview)
        dispatch(actionCreate(newReview))
        return newReview;
    }
    if (resReview.status < 500) {
        const data = await resReview.json()
        console.log("data_in_add_review_thunk",data)
        if (data.errors)
            return data
    }
}

export const editReviewTHUNK = (review) => async (dispatch) => {
    const res = await fetch(`api/reviews/${review.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })

    if (res.ok) {
        const update = await res.json();
        dispatch(actionEdit(update))
        return update
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(actionDelete(reviewId))
        return res
    }
}

// todo: reduce stuff
const initialState = { productReviews: {}, userReviews: {} };

const reviewsReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case GET_ALL:
            newState = { ...state }
            let productReviews = {};
            console.log('action_action---_review_product', action.allReviews)
            action.allReviews.Reviews.forEach((review) => (productReviews[review.id] = review))
            newState.productReviews = productReviews;
            return newState;

        case GET_BY_USER:
            newState = { ...state }
            let userReviews = {}
            action.userReviewInfo.Reviews.forEach((review) => (userReviews[review.id] = review));
            newState.userReviews = userReviews;
            return newState;

        case CREATE:
            newState = { ...state }
            newState.userReviews[action.newReview.id] = action.newReview
            console.log('newState_review_create++++++++++++++++:', newState)
            return newState;

        case EDIT:
            newState = { ...state }
            newState.userReviews[action.newReview.id] = action.newReview
            console.log('newState_review_edit:', newState)
            return newState;


        case DELETE:
            const deleted = {
                ...state,
                productReviews: {},
                userReviews: {...state.userReviews }
                }
            delete deleted.userReviews[action.reviewId]
            console.log("review_delete_reducer",deleted)
            return deleted;


        default:
            return state;
    }
}

export default reviewsReducer;
