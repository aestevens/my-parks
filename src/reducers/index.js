import { combineReducers } from "redux";
import ParksReducer from "./reducer-parks";

const rootReducer = combineReducers({
  parks: ParksReducer
});

export default rootReducer;
