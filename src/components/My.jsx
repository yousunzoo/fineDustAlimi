import React, { useContext, useEffect } from 'react';
import * as S from '../styles/My';
import { TbLocation } from 'react-icons/tb';
import { GeolocationContext } from './common/Layout';
import { useGetWeatherQuery } from '../store/apis/weatherApi';

function My() {
	const { currentLocation } = useContext(GeolocationContext);
	// const data = useGetWeatherQuery(currentLocation);
	// console.log(data);
	return (
		<S.MyCard>
			<S.MyLocation>
				<button>
					<TbLocation />
				</button>
				<p>현위치</p>
				<p className='nowLocation'>{currentLocation}</p>
			</S.MyLocation>
		</S.MyCard>
	);
}
export default My;
