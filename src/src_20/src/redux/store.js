import { configureStore } from "@reduxjs/toolkit";
import retailCartReducer from "./retailCartSlice";
const store = configureStore({
  reducer: {
    retailCart: retailCartReducer,
  },
});
export default store;
