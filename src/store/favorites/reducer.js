// import {ADD_FAVORITE, REMOVE_FAVORITE} from './types'
import * as types from './types'

const initialState = {
  favoriteJokes: [],
  menuActive: false,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE: {
      // console.log(state);
      const existJoke = state.find(
        (favorite) => favorite.id === action.payload.joke.id
      );
      if (existJoke) {
        return state;
      }

      return [...state, action.payload.joke]
    }
    case types.REMOVE_FAVORITE: {
      const newFavorite = state.filter(
        (favorite) => favorite.id !== action.payload.cardId
      );
      return newFavorite

    }
    case types.HANDLE_MENU_FAVORITE: {
      console.log('HANDLE_MENU_FAVORITE', state);
      return { ...state, menuActive: true }
    }
    default:
      return state;
  }
}
export default favoriteReducer