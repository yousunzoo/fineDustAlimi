import React from 'react';
import * as S from '../style';
import switchGrade from '../utils/switchGrade';
function MyStation({ name, nowData }) {
	const { grade, backgroundColor } = switchGrade(nowData.pm10Grade);
	return (
		<S.NowArea background={backgroundColor}>
			<p className='stationName'>{name}</p>
			<div className='gradeArea'>
				<p>미세먼지</p>
				<p>{grade}</p>
			</div>
			<div className='valueArea'>
				<p>미세먼지 농도</p>
				<p>{nowData.pm10Value}μg/m3</p>
			</div>
			<S.UpdateTime>{nowData.dataTime} 기준</S.UpdateTime>
		</S.NowArea>
	);
}

export default MyStation;
