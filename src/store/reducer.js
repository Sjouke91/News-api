import { combineReducers } from "redux";
import appState from "./appState/reducer";
import articleReducer from "./Articles/reducer";

const reducer = combineReducers({
  AppState: appState,
  Articles: articleReducer,
});

export default reducer;
