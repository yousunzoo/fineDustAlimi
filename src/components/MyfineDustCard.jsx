import React from 'react';
import * as S from '../styles/My';
import gradeData from '../constants/gradeData.json';

function MyfineDustCard({ fineDustData }) {
	const pm10grade = fineDustData?.pm10Grade || 'null';
	const pm25grade = fineDustData?.pm25Grade || 'null';

	if (!fineDustData) return;
	return (
		<S.FineDustCard style={gradeData[pm10grade].style} pm25color={gradeData[pm25grade].style.color}>
			<img className='emoji' src={gradeData[pm10grade].image} />
			<p className='pm10grade'>{gradeData[pm10grade].text}</p>
			<div className='dataArea'>
				<div className='pm25 dataContainer'>
					<p className='dataTitle'>초미세먼지</p>
					<div className='dataContents'>
						<p className='grade'>{gradeData[pm25grade].text}</p>
						<p className='value'>
							<span>{fineDustData.pm25Value}</span>㎍/㎥
						</p>
					</div>
				</div>
				<div className='pm10 dataContainer'>
					<p className='dataTitle'>미세먼지</p>
					<div className='dataContents'>
						<p className='grade'>{gradeData[pm10grade].text}</p>
						<p className='value'>
							<span>{fineDustData.pm10Value}</span>㎍/㎥
						</p>
					</div>
				</div>
			</div>
		</S.FineDustCard>
	);
}

export default MyfineDustCard;
