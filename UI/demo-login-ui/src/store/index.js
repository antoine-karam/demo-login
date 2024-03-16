import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  devTools: {
    name: 'login-demo1' 
  }
});

export default store;