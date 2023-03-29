import React from 'react';
import { Outlet } from 'react-router';
import NavTab from './NavTab';
import * as S from '../../styles/Layout';

function Layout() {
	return (
		<S.MainContainer>
			<main>
				<Outlet />
			</main>
			<NavTab />
		</S.MainContainer>
	);
}

export default Layout;
