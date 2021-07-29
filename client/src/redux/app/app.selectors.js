import {createSelector} from 'reselect';

export const selectApp = state => state.app;

export const selectAppIsModalOpen = createSelector(
    [selectApp],
    app => app.isModalOpen
);