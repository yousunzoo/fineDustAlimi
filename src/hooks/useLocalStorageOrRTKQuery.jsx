import { useEffect, useState } from 'react';

function useLocalStorageOrRTKQuery(query, storageKey) {
	const [localStorageData, setLocalStorageData] = useState(() => {
		const data = localStorage.getItem(storageKey);
		return data ? JSON.parse(data) : undefined;
	});

	const { data = localStorageData, isLoading, isError } = query();

	useEffect(() => {
		if (!isLoading && !isError) {
			localStorage.setItem(key, JSON.stringify(data));
			setLocalStorageData(data);
		}
	}, [data, isLoading, isError, key]);

	if (isError) {
		console.error('Error fetching data from RTK Query:', isError);
	}

	return { data, isLoading, isError };
}

export default useLocalStorageOrRTKQuery;
