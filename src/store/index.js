import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({});

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, dustApi.middleware]),
});

export default store;
