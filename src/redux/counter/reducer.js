import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./actons";

const initialState = { total: 0 }

// export const counterReducer = (state = initialState, action) => {
// 	if (action.type === "increment") {
// 		return { ...state, total: state.total + action.payload }
// 	} else if (action.type === 'decrement') {
// 		return { ...state, total: state.total - action.payload }
// 	}
// 	return state;
// };

export const counterReducer = createReducer(initialState, {
	[incrementAction]: (state, { payload }) => {
		state.total += payload
	},
	[decrementAction]: (state, { payload }) => {
		state.total -= payload
	}
})