import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStationDataQuery } from '../api/fineDustApi';
import Chart from '../components/Chart';
import MyStation from '../components/MyStation';
import * as S from '../style';

function My() {
	const { stationName } = useParams();
	const { data, isLoading, isError } = useGetStationDataQuery(stationName);

	if (isError) return <div>해당 관측소의 데이터를 불러올 수 없습니다. 다시 시도해주세요</div>;
	if (isLoading) return <S.Loader />;
	return (
		<S.ChooseArea>
			<MyStation name={stationName} nowData={data.stationNowData} />
			<S.ChartArea>
				<Chart name={stationName} stationData={data.stationChartData} />
			</S.ChartArea>
		</S.ChooseArea>
	);
}

export default My;
