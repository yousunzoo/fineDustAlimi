import React from 'react';
import { useSelector } from 'react-redux';

function Favorites() {
	const { favoriteStation } = useSelector((state) => state.dust);
	return (
		<div>
			{favoriteStation.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
}

export default Favorites;
