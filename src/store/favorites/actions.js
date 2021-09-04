import { ADD_FAVORITE, HANDLE_MENU_FAVORITE, SET_LOCAL_FAVORITE } from "./types"


export const setFavoritesFromLocal = jokes => {
    return {
        type: SET_LOCAL_FAVORITE,
        payload: jokes
    }
}
export const addFavoriteJokeAction = joke => {
    return {
        type: ADD_FAVORITE,
        payload: { joke }
    }
}

export const removeFavoriteJokeAction = id => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: { cardId: id }
    }
}
export const handleMenuAction = () => {
    console.log('handleMenuAction');
    return {
        type: HANDLE_MENU_FAVORITE
    }
}

