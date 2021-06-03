import FavoritesActionTypes from './favorites.types';
import { addRemoveFav } from './favorites.utils';

const INITIAL_STATE = {
    favorites: []
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavoritesActionTypes.ADD_FAV:
            return {
                ...state,
                favorites: addRemoveFav(state.favorites, action.payload)
            }
        case FavoritesActionTypes.REMOVE_FAV:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default favoritesReducer;
