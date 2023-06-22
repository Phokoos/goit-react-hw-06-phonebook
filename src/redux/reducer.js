import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterSlice";

export const reducer = combineReducers({
	counter: counterReducer,
}) 
