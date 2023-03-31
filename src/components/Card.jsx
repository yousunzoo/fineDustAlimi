import React from 'react';
import * as S from '../styles/All';
import gradeData from '../constants/gradeData.json';

function Card({ item }) {
	const grade = gradeData[item.pm10Grade];
	return (
		<S.Card key={item.stationName} style={grade.style}>
			<p className='sidoName'>{item.sidoName}</p>
			<p className='stationName'>{item.stationName}</p>
			<p className='grade'>{grade.text}</p>
			<p className='pm10Value'>미세먼지 농도 : {item.pm10Value}㎍/㎥</p>
			<p className='pm25Value'>초미세먼지 농도 : {item.pm25Value}㎍/㎥</p>
		</S.Card>
	);
}

export default Card;
