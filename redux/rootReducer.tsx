import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import task1Reducer from "./slices/task1Slice";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const webStorage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const getPersistConfigByKey = (key: string) => ({
  key,
  storage: webStorage,
});

export const persistedReducers = combineReducers({
  task1: persistReducer(getPersistConfigByKey("task1"), task1Reducer),
});
