import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sidoArr: [],
	stationData: {},
	favoriteArr: [],
	favoriteStationData: {},
};

const fineDustSlice = createSlice({
	name: 'fineDust',
	initialState,
	reducers: {
		getSido: (state, action) => {
			state.sidoArr = [...action.payload];
		},
		setStation: (state, action) => {
			state.stationData = state.sidoArr.filter((item) => item.stationName === action.payload)[0];
		},
		getFavorites: (state, action) => {
			const { fetchedData, favoritesArr } = action.payload;
			const favoriteData = favoritesArr.map((favorite) => {
				const idx = fetchedData.findIndex((item) => item.stationName === favorite.stationName);
				return fetchedData[idx];
			});
			state.favoriteArr = favoriteData;
		},
		setFavoriteItem: (state, action) => {
			state.favoriteStationData = state.favoriteArr.filter((item) => item.stationName === action.payload)[0];
		},
	},
});

export const { getSido, setStation, getFavorites, setFavoriteItem } = fineDustSlice.actions;
export default fineDustSlice.reducer;
