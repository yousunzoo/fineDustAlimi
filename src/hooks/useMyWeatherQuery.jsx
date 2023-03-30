import { useState } from 'react';
import { useGetWeatherQuery } from '../store/apis/weatherApi';

const useMyWeatherQuery = () => {
	const [localStorageData, setLocalStorageData] = useState(localStorage.getItem('geolocation'));

	const { data, isLoading, isFetching } = useGetWeatherQuery(JSON.parse(localStorageData), {
		skip: localStorageData === null,
	});

	// localStorage에 데이터가 없을 때, RTK Query를 실행하지 않습니다.
	if (localStorageData === null && !isFetching) {
		return { data: null, isFetching };
	}

	return { data, isLoading, isFetching };
};

export default useMyWeatherQuery;
