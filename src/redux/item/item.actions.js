import { ItemActionTypes } from './item.types';

export const setLatestItem = item => ({
    type: ItemActionTypes.SET_LATEST_ITEM,
    payload: item
});

export const setItemPageTab = flag => ({
    type: ItemActionTypes.SET_ITEM_PAGE_TAB,
    payload: flag
});
