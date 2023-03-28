import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFineDustDataQuery } from '../api/fineDustApi';
import { FavoriteContext } from '../components/Container';
import NationCard from '../components/NationCard';
import * as S from '../style';

function Nationwide() {
	const { sidoName = '전국' } = useParams();
	const { favoriteStation, handleFavorite } = useContext(FavoriteContext);
	const { data } = useGetFineDustDataQuery(sidoName);
	const sidoData = data.sidoData;

	return (
		<S.NationCardArea>
			{sidoData.map((item) => (
				<NationCard item={item} key={item.stationName} favoriteStation={favoriteStation} handleFavorite={handleFavorite} />
			))}
		</S.NationCardArea>
	);
}

export default Nationwide;
