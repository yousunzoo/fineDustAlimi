import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dustSlice } from './slice/dustSlice';
import dustDataReducer from './slice/dustSlice';
const rootReducer = combineReducers({
	[dustSlice.name]: dustDataReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
