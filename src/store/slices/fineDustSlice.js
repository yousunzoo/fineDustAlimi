import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidoData: [],
	stationData: {},
};

const fineDustSlice = createSlice({
	name: 'fineDust',
	initialState,
	reducers: {
		getSido: (state, action) => {
			state.sidoData = [...action.payload];
		},
		getStation: (state, action) => {
			state.stationData = state.sidoData.filter((item) => item.stationName === action.payload)[0];
		},
	},
});

export const { getSido, getStation } = fineDustSlice.actions;
export default fineDustSlice.reducer;
