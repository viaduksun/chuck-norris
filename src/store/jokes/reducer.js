import { SET_CURRENT_PAGE, SET_JOKES } from "./types";

const initialState = {
  jokes: [],
  currentPage: 1
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOKES: {
      return { ...state, jokes: action.payload.jokes }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload }
    }
    default:
      return state;
  }
}

export default jokesReducer