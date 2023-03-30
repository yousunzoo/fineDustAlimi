import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const setParams = (geolocation) => {
	return {
		lat: geolocation.latitude,
		lon: geolocation.longitude,
		appid: import.meta.env.VITE_WEATHER_APIKEY,
		units: 'metric',
	};
};

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
	}),
	endpoints: (builder) => ({
		getWeather: builder.query({
			query: (geolocation) => {
				return {
					url: '',
					params: setParams(geolocation),
				};
			},
			transformResponse: (response) => {
				return response;
			},
		}),
	}),
});
export const { useGetWeatherQuery } = weatherApi;
