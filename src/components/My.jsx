import React, { useContext, useEffect } from 'react';
import * as S from '../styles/My';
import { TbLocation } from 'react-icons/tb';
import { GeolocationContext } from './common/Layout';
import useMyCoordinateQuery from '../hooks/useMyCoordinateQuery';
import { useGetStationDataQuery } from '../store/apis/fineDustApi';
import MyfineDustCard from './MyfineDustCard';

function My() {
	const { currentLocation } = useContext(GeolocationContext);
	const { data: coordinate, loading: coordinateLoading, error: coordinateError } = useMyCoordinateQuery(currentLocation.stationName);
	const { data: fineDustData, loading: fineDustLoading, error: fineDustError } = useGetStationDataQuery(coordinate);
	if (coordinateLoading || fineDustLoading) return <div>loading...</div>;
	if (coordinateError || fineDustError) return <div>Error</div>;
	return (
		<S.MyCard>
			<S.MyLocation>
				<button>
					<TbLocation />
				</button>
				<p>현위치</p>
				<p className='nowLocation'>{currentLocation.myLocation}</p>
			</S.MyLocation>
			<MyfineDustCard fineDustData={fineDustData} />
		</S.MyCard>
	);
}
export default My;
