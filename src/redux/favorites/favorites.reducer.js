import FavoritesActionTypes from './favorites.types';
import { addRemoveFav } from './favorites.utils';

const INITIAL_STATE = {
    list: []
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FavoritesActionTypes.ADD_FAV:
            return {
                ...state,
                list: addRemoveFav(state.list, action.payload)
            }
        case FavoritesActionTypes.CLEAR_ALL_FAVS:
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
}

export default favoritesReducer;
