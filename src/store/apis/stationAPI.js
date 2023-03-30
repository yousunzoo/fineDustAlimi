import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const setParams = (location) => {
	return { serviceKey: import.meta.env.VITE_APIKEY, returnType: 'json', numOfRows: '100', pageNo: '1', umdName: location };
};

export const stationApi = createApi({
	reducerPath: 'stationApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc',
	}),
	endpoints: (builder) => ({
		getCoorinate: builder.query({
			query: (location) => {
				return {
					url: '/getTMStdrCrdnt',
					params: setParams(location),
				};
			},
		}),
	}),
});

export const { useGetCoorinateQuery } = stationApi;
