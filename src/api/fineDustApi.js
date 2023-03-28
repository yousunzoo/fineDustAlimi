import axios from 'axios';
import { commonParams } from '../constants/apiParams';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const instance = axios.create({
	baseURL: '/api',
});

export const fineDustApi = createApi({
	reducerPath: 'fineDust',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api/B552584/ArpltnInforInqireSvc/',
	}),
	endpoints: (builder) => ({
		getFineDustData: builder.query({
			query: (sidoName) => ({
				url: '/getCtprvnRltmMesureDnsty',
				params: { ...commonParams, sidoName },
				keepUnusedDataFor: 600,
			}),
			transformResponse: (response) => {
				const result = response.response.body.items;

				return { stationArr, sidoData };
			},
		}),
		getStationData: builder.query({
			query: (stationName) => ({
				url: '/getMsrstnAcctoRltmMesureDnsty',
				params: { ...commonParams, stationName, dataTerm: 'DAILY' },
			}),
			transformResponse: (response) => {
				let result = response.response.body.items;
				const data = [];
				const labels = [];
				if (result.length > 9) {
					result = result.slice(0, 9);
				}
				result.forEach((item) => {
					data.unshift(item.pm10Value);
					labels.unshift(item.dataTime.substr(10));
				});
				const now = result[0];
				const stationNowData = { dataTime: now.dataTime, sidoName: now.sidoName, stationName: now.stationName, pm10Value: now.pm10Value, pm10Grade: now.pm10Grade };
				return { stationNowData, stationChartData: { data, labels } };
			},
		}),
	}),
});

export const { useGetFineDustDataQuery, useGetStationDataQuery } = fineDustApi;
