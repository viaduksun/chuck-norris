import { ADD_FAVORITE, HANDLE_MENU_FAVORITE } from "./types"


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

