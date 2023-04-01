import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../../styles/Card';
import gradeData from '../../constants/gradeData.json';
import { FiMapPin } from 'react-icons/fi';
import { BsChatHeart, BsChatHeartFill } from 'react-icons/bs';

function StationCard() {
	const { stationData } = useSelector((state) => state.fineDust);
	const favoriteItem = JSON.parse(localStorage.getItem('favorites')) || [];
	const [isFavorite, setIsFavorite] = useState(false);
	const pm10grade = stationData.pm10Grade;
	const pm25grade = stationData.pm25Grade;

	// useState 안에서 filter 처리하면 아이템 한번 선택하면 나머지 카드에도 전부 저 값 적용됨, useEffect 사용하면 해결됨. Why?
	useEffect(() => {
		setIsFavorite(favoriteItem.filter((item) => item.stationName === stationData.stationName).length > 0 ? true : false);
	}, [stationData]);

	const handleBookmark = () => {
		if (isFavorite) {
			const newArr = favoriteItem.filter((item) => item.stationName !== stationData.stationName);
			localStorage.setItem('favorites', JSON.stringify(newArr));
		} else {
			const newArr = [...favoriteItem, { sidoName: stationData.sidoName, stationName: stationData.stationName }];
			localStorage.setItem('favorites', JSON.stringify(newArr));
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<S.MyCard layoutId={stationData.stationName} className='stationCard'>
			<S.MyLocation>
				<button>
					<FiMapPin />
				</button>
				<p>선택한 위치</p>
				<p className='nowLocation'>
					{stationData.sidoName} {stationData.stationName}
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
								<span>{stationData.pm25Value}</span>㎍/㎥
							</p>
						</div>
					</div>
					<div className='pm10 dataContainer'>
						<p className='dataTitle'>미세먼지</p>
						<div className='dataContents'>
							<p className='grade'>{gradeData[pm10grade].text}</p>
							<p className='value'>
								<span>{stationData.pm10Value}</span>㎍/㎥
							</p>
						</div>
					</div>
				</div>
			</S.FineDustCard>
			<p className='updateTime'>기준 시간 : {stationData.dataTime}</p>
		</S.MyCard>
	);
}

export default StationCard;
