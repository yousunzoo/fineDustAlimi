import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { SelectedIdContext } from '../components/common/Layout';
import Loader from '../components/common/Loader';
import { useGetMultipleDustsQuery } from '../store/apis/fineDustApi';
import { getFavorites } from '../store/slices/fineDustSlice';

function Favorites() {
	const [favoritesArr, setFavoritesArr] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
	const { isSelected } = useContext(SelectedIdContext);
	const { data, isLoading, isError } = useGetMultipleDustsQuery(favoritesArr);
	const { favoriteArr } = useSelector((state) => state.fineDust);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoading) {
			dispatch(getFavorites({ fetchedData: data, favoritesArr }));
		}
		if (!isSelected) {
			setFavoritesArr(JSON.parse(localStorage.getItem('favorites')));
		}
	}, [data, isSelected]);
	if (isLoading) return <Loader />;
	if (favoriteArr.length === 0) return <>즐겨찾기 데이터가 없습니다.</>;
	return <CardsContainer data={favoriteArr} />;
}

export default Favorites;
