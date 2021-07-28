import axios from 'axios';

export const FETCH_FOOD_LOADING = "FETCH_FOOD_LOADING"
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE"

export const getFood = () => {
    return dispatch => {
        dispatch(fetchFoodLoading())
        axios.get('https://foodish-api.herokuapp.com/api/')
        .then(response => {
            console.log(response)
            dispatch(fetchFoodSuccess(response.data.image))
        })
        .catch(error => {
            dispatch(error)
        })
    }
}

export const fetchFoodLoading = () => {
    return ({ type: FETCH_FOOD_LOADING })
}

export const fetchFoodSuccess = (image) => {
    return ({ type: FETCH_FOOD_SUCCESS, payload: image })
}

export const fetchFoodFailure = (error) => {
    return ({ type: FETCH_FOOD_FAILURE, payload: error })
}