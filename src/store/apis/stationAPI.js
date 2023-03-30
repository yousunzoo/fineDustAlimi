import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commonParams = {
	serviceKey: import.meta.env.VITE_APIKEY,
	returnType: 'JSON',
};

export const stationApi = createApi({
	reducerPath: 'stationApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc',
	}),
	endpoints: (builder) => ({
		getCoordinate: builder.query({
			query: (location) => {
				return {
					url: '/getTMStdrCrdnt',
					params: { ...commonParams, umdName: location },
				};
			},
			transformResponse: (responseData) => {
				const result = responseData['response']['body']['items'][0];
				const coordinate = { tmX: result.tmX, tmY: result.tmY };
				localStorage.setItem('coordinate', JSON.stringify(coordinate));
				return coordinate;
			},
		}),
		getStationName: builder.query({
			query: (coordinate) => {
				const tmX = coordinate['tmX'];
				const tmY = coordinate['tmY'];
				return {
					url: '/getNearbyMsrstnList',
					params: { ...commonParams, tmX, tmY },
				};
			},
			transformResponse: (responseData) => {
				const result = responseData['response']['body']['items'][0]['stationName'];
				localStorage.setItem('stationName', JSON.stringify(result));
				return result;
			},
		}),
	}),
});

export const { useGetCoordinateQuery, useGetStationNameQuery } = stationApi;
