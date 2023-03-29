import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../pages/Home';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/search' />
					<Route path='/all' />
					<Route path='/favorites' />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
