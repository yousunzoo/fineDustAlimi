import { configureStore } from '@reduxjs/toolkit';
import { fineDustApi } from '../api/fineDustApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
const store = configureStore({
	reducer: {
		[fineDustApi.reducerPath]: fineDustApi.reducer,
	},
	// 캐싱, 요청 취소, 폴링 등등 유용한 rtk-query의 기능들을 위한 api 미들웨어 추가
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fineDustApi.middleware),
});
setupListeners(store.dispatch);

export default store;
