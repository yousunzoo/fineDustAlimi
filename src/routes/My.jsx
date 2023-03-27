import React from 'react';
import { useSelector } from 'react-redux';
import Chart from '../components/Chart';

function My() {
	const { stationData } = useSelector((state) => state.dust);
	if (stationData.length === 0) return <div>위치를 선택해주세요</div>;
	return <Chart stationData={stationData} />;
}

export default My;
