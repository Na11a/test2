import { postReducer } from "./postReducer";

import { combineReducers } from "redux";
import { FilterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  filter: FilterReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
