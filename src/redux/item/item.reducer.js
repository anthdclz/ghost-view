import { ItemActionTypes } from './item.types';

const INITIAL_STATE = {
    latestItem: null,
    itemPageTab: ''
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemActionTypes.SET_LATEST_ITEM:
            return {
                ...state,
                latestItem: action.payload
            }
        case ItemActionTypes.SET_ITEM_PAGE_TAB:
            return {
                ...state,
                itemPageTab: action.payload
            }
        default:
            return state;
    }
}

export default itemReducer;
