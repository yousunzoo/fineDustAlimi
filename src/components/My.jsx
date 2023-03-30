import React, { useContext, useEffect } from 'react';
import * as S from '../styles/My';
import { TbLocation } from 'react-icons/tb';
import { GeolocationContext } from './common/Layout';
import MyfineDustCard from './MyfineDustCard';
import Loader from './common/Loader';
import { useGetCoordinateQuery, useGetStationNameQuery } from '../store/apis/stationApi';
import useQuerywithLocalStorage from '../hooks/useQuerywithLocalStorage';
import useMyCoordinateQuery from '../hooks/useMyCoordinateQuery';

function My() {
	const { currentLocation } = useContext(GeolocationContext);
	const { data: fineDustData, isLoading, isFetching } = useMyCoordinateQuery(currentLocation.stationName);
	// const { data: stationData, isLoading: fineDustLoading, isFetching: fineDustFetching, isError: fineDustError } = useGetStationNameQuery(coordinate);

	if (isLoading || isFetching || !fineDustData) return <Loader />;

	return (
		<S.MyCard>
			<S.MyLocation>
				<button>
					<TbLocation />
				</button>
				<p>현위치</p>
				<p className='nowLocation'>{currentLocation.myLocation}</p>
			</S.MyLocation>
			<MyfineDustCard fineDustData={fineDustData['items'][0]} />
		</S.MyCard>
	);
}
export default My;
