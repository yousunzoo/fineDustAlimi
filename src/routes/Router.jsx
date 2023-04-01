import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import All from '../pages/All';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Search from '../pages/Search';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/search' element={<Search />} />
					<Route path='/all' element={<All />} />
					<Route path='/favorites' element={<Favorites />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
