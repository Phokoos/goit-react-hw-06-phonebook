import { combineReducers } from "redux";
import { counterReducer } from "./counter/reducer";

export const reducer = {
	counter: counterReducer,
}
