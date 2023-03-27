import React, { useState } from 'react';
import * as S from '../style';
import switchGrade from '../utils/switchGrade';
import { BsBookmark, BsFillBookmarkStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/slice/dustSlice';

function NationCard({ item }) {
	const { grade, emoji, backgroundColor } = switchGrade(item.pm10Grade);
	const { favoriteStation } = useSelector((state) => state.dust);
	const [isFavoriteNation, setIsFavoriteNation] = useState(favoriteStation.find((arrItem) => arrItem === item.stationName) ? true : false);
	const dispatch = useDispatch();

	const handleFavorite = () => {
		setIsFavoriteNation(!isFavoriteNation);
		if (isFavoriteNation) {
			dispatch(removeFavorite(item.stationName));
		} else {
			dispatch(addFavorite(item.stationName));
		}
	};

	return (
		<S.NationCard style={{ backgroundColor }}>
			<S.GradeEmoji>{emoji}</S.GradeEmoji>
			<S.LocationArea>
				<S.Location>
					{item.stationName}({item.sidoName})
				</S.Location>
				<p>{grade}</p>
			</S.LocationArea>
			<S.AddFavoriteButton onClick={handleFavorite}>{isFavoriteNation ? <BsFillBookmarkStarFill /> : <BsBookmark />}</S.AddFavoriteButton>
			<S.InfoArea>
				<p>미세먼지 농도</p>
				<p>{item.pm10Value}μg/m3</p>
			</S.InfoArea>
		</S.NationCard>
	);
}

export default NationCard;
