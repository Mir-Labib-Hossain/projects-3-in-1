import { persistedReducers } from "@/redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    persisted: persistedReducers,
  },
  middleware: (getDefaultMiddleware: (arg0: { serializableCheck: boolean }) => any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
