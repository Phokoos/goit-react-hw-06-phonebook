import { createSlice } from "@reduxjs/toolkit";

const initialState = { total: 0 }

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, { payload }) => {
			state.total += payload
		},
		decrement: (state, { payload }) => {
			state.total -= payload
		}
	}
})

export const counterReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;