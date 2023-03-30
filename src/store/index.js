import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { weatherApi } from './apis/weatherApi';
import { stationApi } from './apis/stationAPI';
const logger = createLogger();

const rootReducer = combineReducers({
	[weatherApi.reducerPath]: weatherApi.reducer,
	[stationApi.reducerPath]: stationApi.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([stationApi.middleware, weatherApi.middleware]),
});

export default store;
