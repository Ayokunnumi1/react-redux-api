import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./users/usersSlice";
const store = configureStore({
    reducer: {
      user: userSliceReducer,
  }
});

export default store;