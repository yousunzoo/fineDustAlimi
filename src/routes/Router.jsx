import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import All from '../pages/All';
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
					<Route path='/favorites' />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
