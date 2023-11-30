import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";

const { REACT_APP_ENV } = process.env;

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: REACT_APP_ENV && REACT_APP_ENV !== "production",
});

export default store;
