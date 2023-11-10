import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
const store = configureStore({
  reducer: {
    user: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
