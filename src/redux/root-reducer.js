import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import favoritesReducer from './favorites/favorites.reducer';
import itemReducer from './item/item.reducer';

export default combineReducers({
    user: userReducer,
    favorites: favoritesReducer,
    item: itemReducer
});