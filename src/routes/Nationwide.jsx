import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFineDustDataQuery } from '../api/fineDustApi';
import { FavoriteContext } from '../components/Container';
import NationCard from '../components/NationCard';
import * as S from '../style';

function Nationwide() {
	const { sidoName = '전국' } = useParams();
	const { favoriteStation, handleFavorite } = useContext(FavoriteContext);
	const { data, isLoading } = useGetFineDustDataQuery(sidoName);

	if (isLoading) return <S.Loader />;
	return (
		<S.NationCardArea>
			{data.sidoData.map((item) => (
				<NationCard item={item} key={item.stationName} favoriteStation={favoriteStation} handleFavorite={handleFavorite} />
			))}
		</S.NationCardArea>
	);
}

export default Nationwide;
