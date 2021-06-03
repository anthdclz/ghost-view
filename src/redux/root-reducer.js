import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import favoritesReducer from './favorites/favorites.reducer';

export default combineReducers({
    user: userReducer,
    favorites: favoritesReducer
});