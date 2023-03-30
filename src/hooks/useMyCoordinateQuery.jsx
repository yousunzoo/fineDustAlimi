import React, { useEffect, useState } from 'react';
import { useGetStationDataQuery } from '../store/apis/fineDustApi';
import { useGetCoordinateQuery, useGetStationNameQuery } from '../store/apis/stationApi';

function useMyCoordinateQuery(myStationName) {
	const [skipCoordinate, setSkipCoordinate] = useState(true);
	const [skipStationName, setSkipStationName] = useState(true);
	const [myCoordinate, setMyCoordinate] = useState(JSON.parse(localStorage.getItem('coordinate')));
	const [stationName, setStationName] = useState(JSON.parse(localStorage.getItem('stationName')));
	// 내 좌표 가져오기
	const { data: coordinate } = useGetCoordinateQuery(myStationName, { skip: skipCoordinate });
	const { data: stationData } = useGetStationNameQuery(myCoordinate || coordinate, { skip: skipStationName });
	const { data: fineDustData, isLoading, isFetching } = useGetStationDataQuery(stationName || stationData);
	useEffect(() => {
		if (!localStorage.getItem('coordinate')) {
			// localStorage에 coordinate 없으면 query 실행되도록
			setSkipCoordinate(false);
			return;
		}
		// localStorage에 coordinate 있으면 stationName 있는지 확인 후 stationName query 실행되도록
		if (!localStorage.getItem('stationName')) {
			setSkipStationName(false);
		}
	}, [coordinate]);

	return { data: fineDustData, isLoading, isFetching };
}
export default useMyCoordinateQuery;
