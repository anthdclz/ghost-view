import FavoritesActionTypes from './favorites.types';

export const addFav = fav => ({
    type: FavoritesActionTypes.ADD_FAV,
    payload: fav
})