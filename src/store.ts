import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "./redux/habitSlice";

const store = configureStore({
  reducer: {
    habits: habitSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
