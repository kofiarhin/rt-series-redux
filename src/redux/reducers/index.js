import { combineReducers } from "redux";

import seriesReducer from "./series.reducer";
const rootReducer = combineReducers({
  seriesReducer,
});

export default rootReducer;
