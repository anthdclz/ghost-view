import { ItemActionTypes } from './item.types';

const INITIAL_STATE = {
    latestItem: null,
    isSummary: true
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ItemActionTypes.SET_LATEST_ITEM:
            return {
                ...state,
                latestItem: action.payload
            }
        case ItemActionTypes.SET_IS_SUMMARY:
            return {
                ...state,
                isSummary: action.payload
            }
        default:
            return state;
    }
}

export default itemReducer;
