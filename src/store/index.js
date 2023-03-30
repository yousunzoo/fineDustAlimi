import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { weatherApi } from './apis/weatherApi';

const logger = createLogger();

const rootReducer = combineReducers({
	[weatherApi.reducerPath]: weatherApi.reducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, weatherApi.middleware]),
});

export default store;
