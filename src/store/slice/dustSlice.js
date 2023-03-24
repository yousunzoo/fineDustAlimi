import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const getParameters = {
	serviceKey: process.env.REACT_APP_API_KEY,
	returnType: 'json',
	numOfRows: '100',
	pageNo: '1',
	ver: '1.0',
	sidoName: '전국',
};

const initialState = {
	isLoading: false,
	fineDustData: [],
	errorMessage: '',
};
export const getDatas = createAsyncThunk('dustData/get', async () => {
	const response = await axios.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', { params: getParameters });
	console.log(response);
	return response.data;
});

export const dustSlice = createSlice({
	name: 'dust',
	initialState,
	reducers: {},
	extraReducers: {
		[getDatas.pending]: (state) => {
			state.isLoading = true;
		},
		[getDatas.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.fineDustData = action.payload;
		},
		[getDatas.rejected]: (state, action) => {
			state.isLoading = false;
			state.errorMessage = action.payload;
		},
	},
});

export default dustSlice.reducer;
