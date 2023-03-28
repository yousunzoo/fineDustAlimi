import React, { useContext } from 'react';
import { FavoriteContext } from '../components/Container';
import NationCard from '../components/NationCard';
import * as S from '../style';

function Favorites() {
	const { favoriteStation, handleFavorite } = useContext(FavoriteContext);
	return (
		<S.NationCardArea>
			{favoriteStation.map((item) => {
				const data = item.data;
				return <NationCard key={data.stationName} item={data} favoriteStation={favoriteStation} handleFavorite={handleFavorite} />;
			})}
		</S.NationCardArea>
	);
}

export default Favorites;
