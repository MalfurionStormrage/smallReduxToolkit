import storage from 'redux-persist/lib/storage';
import { configureStore , combineReducers , getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer , FLUSH, REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER,} from 'redux-persist';
import ReducerProducto from './reducers/Productos';

const reducers = combineReducers({
  ReducerProducto
});

const persistConfig = {
	key:'root',
	storage
}

const persistedReducer  = persistReducer(persistConfig , reducers);

export default configureStore({
  reducer: {
  	persistedReducer 
  },
   middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});