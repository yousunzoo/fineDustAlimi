import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const commonParams = {
	serviceKey: process.env.REACT_APP_API_KEY,
	returnType: 'json',
	numOfRows: '100',
	pageNo: '1',
	ver: '1.0',
};

const initialState = {
	isLoading: false,
	fineDustData: [],
	stationData: [],
	errorMessage: '',
	selectedStation: [],
	favoriteStation: JSON.parse(localStorage.getItem('favoriteStation')) || [],
};

export const getStationData = createAsyncThunk('dustData/get', async (station) => {
	const response = await axios.get('/api/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty', {
		params: { ...commonParams, stationName: station, dataTerm: 'DAILY' },
	});
	let responseData = response.data.response.body.items;
	const data = [];
	const categories = [];
	if (responseData.length > 9) {
		responseData = responseData.slice(0, 9);
	}
	responseData.map((item) => {
		data.unshift(item.pm10Value);
		categories.unshift(item.dataTime.substr(10));
	});
	return { name: station, data, categories };
});
export const getDatas = createAsyncThunk('dustDatas/get', async (location) => {
	const response = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: { ...commonParams, sidoName: location } });
	return response.data.response.body.items;
});

export const dustSlice = createSlice({
	name: 'dust',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.favoriteStation.push(action.payload);
			localStorage.setItem('favoriteStation', JSON.stringify(state.favoriteStation));
		},
		removeFavorite: (state, action) => {
			state.favoriteStation = state.favoriteStation.filter((item) => item !== action.payload);
			localStorage.setItem('favoriteStation', JSON.stringify(state.favoriteStation));
		},
	},
	extraReducers: {
		[getDatas.pending]: (state) => {
			state.isLoading = true;
		},
		[getDatas.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.fineDustData = action.payload.map((item) => {
				return { sidoName: item.sidoName, stationName: item.stationName, pm10Value: item.pm10Value, pm10Grade: item.pm10Grade };
			});
			state.stationArr = action.payload.map((item) => {
				return { value: item.stationName, label: item.stationName };
			});
		},
		[getDatas.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.payload;
		},
		[getStationData.pending]: (state) => {
			state.isLoading = true;
		},
		[getStationData.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.stationData = action.payload;
		},
		[getStationData.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.payload;
		},
	},
});

export default dustSlice.reducer;
export const { addFavorite, removeFavorite } = dustSlice.actions;
