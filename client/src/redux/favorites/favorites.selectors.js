import { createSelector } from 'reselect';

const selectFavorites = state => state.favorites;

export const selectFavItems = createSelector(
    [selectFavorites],
    (favorites) => favorites.list
);

export const selectFavItemsCount = createSelector(
    [selectFavItems],
    list => list.length
);