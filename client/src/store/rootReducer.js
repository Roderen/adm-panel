import { configureStore } from '@reduxjs/toolkit';
// import { sidebarCollapse } from './sidebarCollapse/index';
import { api } from './api/api';
import { adminUsers } from './api/adminUsers';

export const store = configureStore({
  reducer: {
    // sidebar: sidebarCollapse,
    [api.reducerPath]: api.reducer,
    [adminUsers.reducerPath]: adminUsers.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    api.middleware,
    adminUsers.middleware,
  ),
});
