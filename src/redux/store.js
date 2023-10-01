import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./users/usersSlice";
const store = configureStore({
    reducer: {
      user: usersSliceReducer,
  }
});

export default store;