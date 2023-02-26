import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { authReducer } from './auth/auth.slice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './user/user.slice';

export const store = configureStore({
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
    user:userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
