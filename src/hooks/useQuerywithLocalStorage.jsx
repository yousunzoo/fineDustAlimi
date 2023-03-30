import { useEffect, useState } from 'react';

const useQuerywithLocalStorage = (query, storageKey) => {
	const storageKeys = storageKey.split('/');
	const [localStorageData, setLocalStorageData] = useState(JSON.parse(localStorage.getItem(storageKeys[0])) || null);

	const { data, isLoading, isFetching } = query(storageKeys[1] ? localStorageData[storageKeys[1]] : localStorageData, {
		skip: localStorageData === null,
	});

	// localStorage에 데이터가 없을 때, RTK Query를 실행하지 않습니다.
	if (localStorageData === null && !isFetching) {
		return { data: null, isFetching };
	}

	return { data, isLoading, isFetching };
};

export default useQuerywithLocalStorage;
