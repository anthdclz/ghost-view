import { ItemActionTypes } from './item.types';

export const setLatestItem = item => ({
    type: ItemActionTypes.SET_LATEST_ITEM,
    payload: item
});

export const setIsSummary = flag => ({
    type: ItemActionTypes.SET_IS_SUMMARY,
    payload: flag
});
