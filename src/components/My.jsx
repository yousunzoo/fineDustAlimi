import React, { useContext, useEffect } from 'react';
import * as S from '../styles/My';
import { TbLocation } from 'react-icons/tb';
import { GeolocationContext } from './common/Layout';

function My() {
	const { currentLocation } = useContext(GeolocationContext);

	return (
		<S.MyCard>
			<S.MyLocation>
				<button>
					<TbLocation />
				</button>
				<p>현위치</p>
				<p>{currentLocation.latitude}</p>
				<p>{currentLocation.longitude}</p>
			</S.MyLocation>
		</S.MyCard>
	);
}
export default My;
