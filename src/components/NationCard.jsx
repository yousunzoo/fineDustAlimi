import React, { useState } from 'react';
import * as S from '../style';
import switchGrade from '../utils/switchGrade';
import { BsBookmark, BsFillBookmarkStarFill } from 'react-icons/bs';

function NationCard({ item, favoriteStation, handleFavorite }) {
	const { grade, emoji, backgroundColor } = switchGrade(item.pm10Grade);
	const [isFavoriteNation, setIsFavoriteNation] = useState(favoriteStation.find((arrItem) => arrItem.id === item.stationName) ? true : false);

	const onClick = () => {
		setIsFavoriteNation(!isFavoriteNation);
		handleFavorite({ item, isFavoriteNation });
	};

	return (
		<S.NationCard background={backgroundColor}>
			<S.GradeEmoji>{emoji}</S.GradeEmoji>
			<S.LocationArea>
				<S.Location>
					{item.stationName}
					<span className='sidoName'>({item.sidoName})</span>
				</S.Location>
				<p className='grade'>{grade}</p>
			</S.LocationArea>
			<S.InfoArea>
				<p>미세먼지 농도</p>
				<p>{item.pm10Value}μg/m3</p>
			</S.InfoArea>
			<S.AddFavoriteButton onClick={onClick}>{isFavoriteNation ? <BsFillBookmarkStarFill /> : <BsBookmark />}</S.AddFavoriteButton>
			<S.UpdateTime>{item.dataTime}</S.UpdateTime>
		</S.NationCard>
	);
}

export default NationCard;
