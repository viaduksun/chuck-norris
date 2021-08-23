import getJokes from '../../api/getJokes'
import * as types from './types'

export function fetchJokes(selectedCategory, query) {
    return function (dispatch) {
        getJokes(selectedCategory, query).then(response => {
            if (response.hasOwnProperty('total')) {
                dispatch({type: types.SET_JOKES, payload: { jokes: response.result }})
            } else {
                dispatch({type: types.SET_JOKES, payload: { jokes: [response] }})
            }
        })
    }
}
