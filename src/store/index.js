import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { weatherApi } from './apis/weatherApi';
import { stationApi } from './apis/stationApi';
import { fineDustApi } from './apis/fineDustApi';
import fineDustReducer from './slices/fineDustSlice';
const logger = createLogger();

const rootReducer = combineReducers({
	[fineDustApi.reducerPath]: fineDustApi.reducer,
	[weatherApi.reducerPath]: weatherApi.reducer,
	[stationApi.reducerPath]: stationApi.reducer,
	fineDust: fineDustReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([fineDustApi.middleware, stationApi.middleware, weatherApi.middleware]),
});

export default store;
