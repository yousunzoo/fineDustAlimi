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
		baseUrl: '/api/ArpltnInforInqireSvc',
		prepareHeaders: (headers) => {
			headers.set('accept', 'application/json, text/plain, */*');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getStationData: builder.query({
			query: (stationName) => {
				return {
					url: '/getMsrstnAcctoRltmMesureDnsty',
					params: { ...commonParams, stationName, dataTerm: 'DAILY' },
				};
			},
			transformResponse: (responseData) => {
				return responseData['response']['body'];
			},
		}),
		getSidoData: builder.query({
			query: (sidoName) => {
				return {
					url: '/getCtprvnRltmMesureDnsty',
					params: { ...commonParams, sidoName },
				};
			},
			transformResponse: (response) => {
				return response.response.body;
			},
		}),
		getMultipleDusts: builder.query({
			async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
				const sidoArr = _arg.reduce(function (acc, current) {
					if (acc.findIndex((element) => element === current.sidoName) === -1) {
						acc.push(current.sidoName);
					}
					return acc;
				}, []);

				const result = await sidoArr.reduce(async (promise, sidoName) => {
					const argResult = await fetchWithBQ({
						url: '/getCtprvnRltmMesureDnsty',
						params: { ...commonParams, sidoName },
					});

					// 에러처리
					if (argResult.error) return { error: argResult.error };
					// 앞서 처리된 PromiseData 받아오기
					const promiseData = await promise.then();
					return Promise.resolve([...promiseData, ...argResult.data['response']['body']['items']]);
				}, Promise.resolve([]));

				return result.error ? { error: result.error } : { data: result };
			},
		}),
	}),
});

export const { useGetStationDataQuery, useGetSidoDataQuery, useGetMultipleDustsQuery } = fineDustApi;
