import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

/* import Reducers */
import dashboardSlice from '../src/slice/DashboardSlice'

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
    dashboard: dashboardSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;