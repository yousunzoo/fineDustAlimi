import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	lastUpdateTime: '',
	myLocation: {
		latitude: null,
		longitude: null,
	},
	error: '',
};

export const getNowLocation = () => {
	const response = navigator.geolocation.getCurrentPosition((position) => {
		return {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		};
	});
	console.log(response);
	return response;
};

export const locationSlice = createSlice({
	name: 'myLocation',
	initialState,
	reducers: {
		getLocation: (state) => {
			const result = getNowLocation();
			console.log(result);
		},
	},
});

export const { getLocation } = locationSlice.actions;
export default locationSlice.reducer;
