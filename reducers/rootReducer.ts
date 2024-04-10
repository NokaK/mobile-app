import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

export const rootReducer = combineReducers({
  blogs: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
