/* eslint-disable no-fallthrough */
// import {ADD_FAVORITE, REMOVE_FAVORITE} from './types'
import * as types from './types'

const initialState = {
  favoriteJokes: [],
  menuActive: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE: {
      console.log(state);
      console.log(action.payload.joke);

      const existJoke = state.favoriteJokes.find(
        (favorite) => favorite.id === action.payload.joke.id
      );
      console.log('existJoke', existJoke);
      if (!existJoke) {
        const newFavoritesArr = [action.payload.joke, ...state.favoriteJokes];
        console.log('newFavoritesArr', newFavoritesArr);
        return { ...state, favoriteJokes: newFavoritesArr }
      } else {
        console.log('Exist');
        // return { ...state, favoriteJokes: newFavoritesArr }
      }
    }
    case types.REMOVE_FAVORITE: {
      const newFavorite = state.favoriteJokes.filter(
        (favorite) => favorite.id !== action.payload.cardId
      );
      return { ...state, favoriteJokes: newFavorite }
    }
    case types.HANDLE_MENU_FAVORITE: {
      console.log('HANDLE_MENU_FAVORITE', state);
      return { ...state, menuActive: true }
    }
    case types.SET_LOCAL_FAVORITE: {
      return { ...state, favoriteJokes: action.payload }
    }
    default:
      return state;
  }
}
export default favoriteReducer