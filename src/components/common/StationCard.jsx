import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/Card';
import gradeData from '../../constants/gradeData.json';
import { FiMapPin } from 'react-icons/fi';
import { BsChatHeart, BsChatHeartFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

function StationCard() {
	const { pathname } = useLocation();
	const { stationData, favoriteStationData } = useSelector((state) => state.fineDust);
	const [data, setData] = useState(pathname === '/favorites' ? favoriteStationData : stationData);
	const favoriteItem = JSON.parse(localStorage.getItem('favorites')) || [];
	// const [isFavorite, setIsFavorite] = useState(favoriteItem.filter((item) => item.stationName === stationData.stationName).length > 0 ? true : false);
	const [isFavorite, setIsFavorite] = useState(false);
	const pm10grade = data.pm10Grade;
	const pm25grade = data.pm25Grade;

	useEffect(() => {
		setIsFavorite(favoriteItem.filter((item) => item.stationName === data.stationName).length > 0 ? true : false);
	}, [data]);

	const handleBookmark = () => {
		if (isFavorite) {
			const newArr = favoriteItem.filter((item) => item.stationName !== data.stationName);
			localStorage.setItem('favorites', JSON.stringify(newArr));
		} else {
			const newArr = [...favoriteItem, { sidoName: data.sidoName, stationName: data.stationName }];
			localStorage.setItem('favorites', JSON.stringify(newArr));
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<S.MyCard layoutId={data.stationName} className='stationCard'>
			<S.MyLocation>
				<button>
					<FiMapPin />
				</button>
				<p>선택한 위치</p>
				<p className='nowLocation'>
					{data.sidoName} {data.stationName}
				</p>
			</S.MyLocation>
			<S.FineDustCard className='stationCard' style={gradeData[pm10grade].style} pm25color={gradeData[pm25grade].style.color}>
				<button className='bookmark' onClick={handleBookmark}>
					{isFavorite ? <BsChatHeartFill /> : <BsChatHeart />}
				</button>
				<img className='emoji' src={gradeData[pm10grade].image} />
				<p className='pm10grade'>{gradeData[pm10grade].text}</p>
				<div className='dataArea'>
					<div className='pm25 dataContainer'>
						<p className='dataTitle'>초미세먼지</p>
						<div className='dataContents'>
							<p className='grade'>{gradeData[pm25grade].text}</p>
							<p className='value'>
								<span>{data.pm25Value}</span>㎍/㎥
							</p>
						</div>
					</div>
					<div className='pm10 dataContainer'>
						<p className='dataTitle'>미세먼지</p>
						<div className='dataContents'>
							<p className='grade'>{gradeData[pm10grade].text}</p>
							<p className='value'>
								<span>{data.pm10Value}</span>㎍/㎥
							</p>
						</div>
					</div>
				</div>
			</S.FineDustCard>
			<p className='updateTime'>기준 시간 : {data.dataTime}</p>
		</S.MyCard>
	);
}

export default StationCard;
