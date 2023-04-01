import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import NavTab from './NavTab';
import * as S from '../../styles/Layout';
import useCurrentLocation from '../../hooks/useCurrentLocation';

export const GeolocationContext = createContext();
export const SelectedIdContext = createContext();

function Layout() {
	const { location: currentLocation, error: currentError, isLoading } = useCurrentLocation();
	const [isSelected, setIsSelected] = useState(false);
	return (
		<S.MainContainer>
			<main>
				<GeolocationContext.Provider value={{ currentLocation, currentError, isLoading }}>
					<SelectedIdContext.Provider value={{ isSelected, setIsSelected }}>
						<Outlet />
					</SelectedIdContext.Provider>
				</GeolocationContext.Provider>
			</main>
			<NavTab />
		</S.MainContainer>
	);
}

export default Layout;
