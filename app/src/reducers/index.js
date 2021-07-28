import { FETCH_FOOD_LOADING, FETCH_FOOD_SUCCESS, FETCH_FOOD_FAILURE } from "../actions";

const initialState = {
    image: '',
    isFetching: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_FOOD_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case(FETCH_FOOD_SUCCESS):
            return ({
                ...state,
                image: action.payload,
                isFetching: false
            })
        case(FETCH_FOOD_FAILURE):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
};