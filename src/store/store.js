import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import {rootReducer} from './rootReducer'
import thunk from 'redux-thunk'
import favoriteReducer from './favorites/reducer'
import jokesReducer from './jokes/reducer'
import * as favoriteTypes from './favorites/types'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f => f)

const localStorageMiddleware = ({ getState }) => next => action => {
    const result = next(action)
    console.log("ACTION", action);
    // if (favoriteTypes.includes(action.type))  {}
    if (action.type === favoriteTypes.ADD_FAVORITE || action.type === favoriteTypes.REMOVE_FAVORITE) {
        const { favorite } = getState();
        console.log('GET STATE', getState());
        const stringifiedFavorite = JSON.stringify(favorite.favoriteJokes)
        localStorage.setItem('favorite', stringifiedFavorite)
    }
    return result
}
console.log('FFF', favoriteReducer);
export const rootReducer = combineReducers({
    favorite: favoriteReducer,
    jokes: jokesReducer
})
// JSON.parse(localStorage.getItem('favorite'))
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
)



export default store