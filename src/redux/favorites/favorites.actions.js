import FavoritesActionTypes from './favorites.types';

export const addFav = fav => ({
    type: FavoritesActionTypes.ADD_FAV,
    payload: fav
})

export const clearAllFavs = () => ({
    type: FavoritesActionTypes.CLEAR_ALL_FAVS
})