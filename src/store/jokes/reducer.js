import { SET_JOKES } from "./types";

const initialState = [];

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOKES: {
      return action.payload.jokes
    }
    default:
      return state;
  }
}

export default jokesReducer