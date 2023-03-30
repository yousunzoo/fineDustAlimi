import React, { useEffect, useState } from 'react';
import { useGetCoordinateQuery, useGetStationNameQuery } from '../store/apis/stationApi';

function useMyCoordinateQuery(myStationName) {
	const [isLoading, setIsLoading] = useState(true);
	const { data: coordinate, isLoading: coordinateLoading, error, refetch } = useGetCoordinateQuery(myStationName);
	const { data: stationData, loading: stationLoading, error: stationError } = useGetStationNameQuery(coordinate || { tmX: '', tmY: '' });

	useEffect(() => {
		if (!localStorage.getItem('stationName')) {
			refetch();
		} else {
		}
	}, [refetch]);
	const cachedData = JSON.parse(localStorage.getItem('stationName'));

	return { data: cachedData || stationData, isLoading, error };
}
export default useMyCoordinateQuery;
