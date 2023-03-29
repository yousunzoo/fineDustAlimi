import React, { createContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavTab from './NavTab';
import * as S from '../../styles/Layout';
import useCurrentLocation from '../../hooks/useCurrentLocation';

export const GeolocationContext = createContext();
function Layout() {
	const { location: currentLocation, error: currentError, isLoading } = useCurrentLocation();

	return (
		<S.MainContainer>
			<main>
				<GeolocationContext.Provider value={{ currentLocation, currentError, isLoading }}>
					<Outlet />
				</GeolocationContext.Provider>
			</main>
			<NavTab />
		</S.MainContainer>
	);
}

export default Layout;
