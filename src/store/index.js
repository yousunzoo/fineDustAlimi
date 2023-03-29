import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { locationSlice } from './slices/locationSlice';

const logger = createLogger();

const rootReducer = combineReducers({
	[locationSlice.name]: locationSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, dustApi.middleware]),
});

export default store;
