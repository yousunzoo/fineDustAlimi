import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Favorites from '../routes/Favorites';
import My from '../routes/My';
import Nationwide from '../routes/Nationwide';

function ContentsArea() {
	return (
		<Routes>
			<Route path='/' element={<My />} />
			<Route path='/nationwide' element={<Nationwide />} />
			<Route path='/favorites' element={<Favorites />} />
		</Routes>
	);
}

export default ContentsArea;
