import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import filteresreducer from "../reducers/filteresreducer";
import cartreducer from "../reducers/cartreducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ filterData: filteresreducer, cartData: cartreducer })
);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
});
const persistor = persistStore(store);
export { store, persistor };
