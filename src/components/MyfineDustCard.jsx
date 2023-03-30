import React from 'react';
import * as S from '../styles/My';
import gradeData from '../constants/gradeData.json';
import useMyWeatherQuery from '../hooks/useMyWeatherQuery';
import Loader from './common/Loader';

function MyfineDustCard({ fineDustData }) {
	const pm10grade = fineDustData?.pm10Grade || 'null';
	const pm25grade = fineDustData?.pm25Grade || 'null';

	const { data: weatherData, isLoading, isFetching } = useMyWeatherQuery();
	console.log(weatherData);

	if (isLoading || isFetching || !fineDustData) return <Loader />;

	return (
		<S.FineDustCard style={gradeData[pm10grade].style} pm25color={gradeData[pm25grade].style.color}>
			<p className='updateTime'>기준 시간 : {fineDustData.dataTime}</p>
			<div className='weather'>
				<img className='weatherIcon' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
				<p className='temperature'>{weatherData.main.temp}&#8451;</p>
			</div>
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
