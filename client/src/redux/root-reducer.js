import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import favoritesReducer from './favorites/favorites.reducer';
import itemReducer from './item/item.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorites']
};

const rootReducer = combineReducers({
    user: userReducer,
    favorites: favoritesReducer,
    item: itemReducer
});

export default persistReducer(persistConfig, rootReducer);
