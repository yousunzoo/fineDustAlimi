import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const commonParams = {
	serviceKey: import.meta.env.VITE_APIKEY,
	returnType: 'JSON',
	ver: 1.0,
	numOfRows: '100',
	pageNo: '1',
	ver: '1.0',
};

export const fineDustApi = createApi({
	reducerPath: 'fineDustApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc',
	}),
	endpoints: (builder) => ({
		getStationData: builder.query({
			query: (stationName) => {
				return {
					url: '/getMsrstnAcctoRltmMesureDnsty',
					params: { ...commonParams, stationName, dataTerm: 'DAILY' },
				};
			},
			transformResponse: (response) => {
				const result = response.response.body.items[0];
				return result;
			},
		}),
	}),
});

export const { useGetStationDataQuery } = fineDustApi;
