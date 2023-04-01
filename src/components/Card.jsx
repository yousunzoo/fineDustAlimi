import React, { useContext } from 'react';
import * as S from '../styles/All';
import gradeData from '../constants/gradeData.json';
import { SelectedIdContext } from './common/Layout';
import { useDispatch } from 'react-redux';
import { setFavoriteItem, setStation } from '../store/slices/fineDustSlice';
import { useLocation } from 'react-router-dom';

function Card({ item }) {
	const { setIsSelected } = useContext(SelectedIdContext);
	const grade10 = gradeData[item.pm10Grade];
	const grade25 = gradeData[item.pm25Grade];
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const handleClick = () => {
		if (pathname === '/favorites') {
			dispatch(setFavoriteItem(item.stationName));
		} else {
			dispatch(setStation(item.stationName));
		}
		setIsSelected(true);
	};
	return (
		<S.Card theme={{ grade10: grade10.style, grade25: grade25.style }} onClick={handleClick} layoutId={item.id}>
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
