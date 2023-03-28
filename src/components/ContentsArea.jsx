import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Favorites from '../routes/Favorites';
import My from '../routes/My';
import Nationwide from '../routes/Nationwide';
import ChooseStation from './ChooseStation';

function ContentsArea() {
	return (
		<Routes>
			<Route path='/'>
				<Route path='/' element={<ChooseStation />} />
				<Route path='/:stationName' element={<My />} />
			</Route>
			<Route path='/nationwide'>
				<Route path='/nationwide' element={<Nationwide />} />
				<Route path='/nationwide/:sidoName' element={<Nationwide />} />
			</Route>
			<Route path='/favorites' element={<Favorites />} />
		</Routes>
	);
}

export default ContentsArea;
