import React, { useContext } from 'react';
import { GeolocationContext } from '../components/common/Layout';
import Loader from '../components/common/Loader';
import My from '../components/My';

function Home() {
	const { currentLocation, currentError, isLoading } = useContext(GeolocationContext);
	return <>{isLoading ? <Loader /> : <My />}</>;
}

export default Home;
