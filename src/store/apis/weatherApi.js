import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const setParams = (location) => {
	const d = new Date();
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear();
	let hour = '' + d.getHours();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	if (hour.length < 2) hour = '0' + hour;

	const base_date = year + month + day;
	const base_time = hour + '00';
	return {
		serviceKey: import.meta.env.VITE_APIKEY,
		returnType: 'json',
		numOfRows: '100',
		pageNo: '1',
		base_date,
		base_time,
		nx: location.latitude,
		ny: location.longitude,
	};
};

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0',
	}),
	endpoints: (builder) => ({
		getWeather: builder.query({
			query: (location) => {
				return {
					url: '',
					params: setParams(location),
				};
			},
		}),
	}),
});
export const { useGetWeatherQuery } = weatherApi;
