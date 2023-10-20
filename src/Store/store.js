import { configureStore } from "@reduxjs/toolkit";
import musicAppReducer from "./reducers/music_app.js";

export const store = configureStore({
  reducer: {
    musicApp: musicAppReducer,
  }
});