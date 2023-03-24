import React from 'react';
import { Route, Routes } from 'react-router';
import Favorites from '../routes/Favorites';
import My from '../routes/My';
import Nationwide from '../routes/Nationwide';

function ContentsArea() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<My />} />
				<Route path='/nationwide' element={<Nationwide />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</div>
	);
}

export default ContentsArea;
