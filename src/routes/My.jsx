import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStationDataQuery } from '../api/fineDustApi';
import Chart from '../components/Chart';
import * as S from '../style';

function My() {
	const { stationName } = useParams();
	const { data, isLoading, isError } = useGetStationDataQuery(stationName);
	if (isError) return <div>해당 관측소의 데이터를 불러올 수 없습니다. 다시 시도해주세요</div>;
	if (isLoading) return <S.Loader />;
	return (
		<S.ChooseArea>
			<h2>{stationName}</h2>
			<Chart width='100%' height='300px' name={stationName} stationData={data} />
		</S.ChooseArea>
	);
}

export default My;
