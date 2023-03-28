import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useGetFineDustDataQuery } from '../api/fineDustApi';
import * as S from '../style';
import ContentsArea from './ContentsArea';
import SelectTab from './SelectTab';
import SiteNavbar from './SiteNavbar';

export const FavoriteContext = createContext();
function Container() {
	const { isLoading } = useGetFineDustDataQuery('전국');
	const [favoriteStation, setFavoriteStation] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

	const handleFavorite = ({ item, isFavoriteNation }) => {
		if (isFavoriteNation) {
			const newArr = favoriteStation.filter((station) => station.id !== item.stationName);
			localStorage.setItem('favoriteStation', JSON.stringify(newArr));
			setFavoriteStation(newArr);
		} else {
			const newArr = [...favoriteStation, { id: item.stationName, data: item }];
			localStorage.setItem('favoriteStation', JSON.stringify(newArr));
			setFavoriteStation(newArr);
		}
	};
	return (
		<BrowserRouter>
			<S.Container>
				<FavoriteContext.Provider value={{ favoriteStation, handleFavorite }}>
					<SelectTab />
					{isLoading ? <S.Loader /> : <ContentsArea />}
					<SiteNavbar />
				</FavoriteContext.Provider>
			</S.Container>
		</BrowserRouter>
	);
}

export default Container;
