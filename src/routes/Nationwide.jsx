import React from 'react';
import { useSelector } from 'react-redux';
import NationCard from '../components/NationCard';
import * as S from '../style';

function Nationwide() {
	const { fineDustData } = useSelector((state) => state.dust);
	return (
		<S.NationCardArea>
			{fineDustData.map((item) => (
				<NationCard item={item} key={item.stationName} />
			))}
		</S.NationCardArea>
	);
}

export default Nationwide;
