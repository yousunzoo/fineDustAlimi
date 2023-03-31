import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/All';
import Card from './Card';

function CardsContainer() {
	const { sidoData } = useSelector((state) => state.fineDust);

	return (
		<S.CardsContainer>
			<p className='updateTime'>기준 시간 : {sidoData[0]?.dataTime}</p>
			{sidoData.map((item) => {
				return <Card key={item.stationName} item={item} />;
			})}
		</S.CardsContainer>
	);
}

export default CardsContainer;
