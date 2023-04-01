import React from 'react';
import * as S from '../styles/All';
import gradeData from '../constants/gradeData.json';

function Card({ item }) {
	const grade10 = gradeData[item.pm10Grade];
	const grade25 = gradeData[item.pm25Grade];
	return (
		<S.Card key={item.stationName} theme={{ grade10: grade10.style, grade25: grade25.style }}>
			<div className='infoWrapper'>
				<div className='name'>
					<p className='sidoName'>{item.sidoName}</p>
					<p className='stationName'>{item.stationName}</p>
				</div>
				<img className='emoji' src={grade10.image} />
			</div>
			<p className='pm10Value'>
				미세먼지 : <span className='grade'>{grade10.text}</span>
			</p>
			<p className='pm25Value'>
				초미세먼지 : <span className='grade'>{grade25.text}</span>
			</p>
		</S.Card>
	);
}

export default Card;
