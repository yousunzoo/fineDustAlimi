/* global kakao */
import { useState, useEffect } from 'react';
const { kakao } = window;

const useCurrentLocation = () => {
	// location 정보 저장
	const [location, setLocation] = useState({ myLocation: '', stationName: '' });
	// 에러 메세지 저장
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Geolocation의 `getCurrentPosition` 메소드에 대한 성공 callback 핸들러
	const handleSuccess = (pos) => {
		const { latitude, longitude } = pos.coords;
		const geocoder = new kakao.maps.services.Geocoder();

		const coord = new kakao.maps.LatLng(latitude, longitude);
		const callback = function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				const myLocation = result[0].address.region_1depth_name + ' ' + result[0].address.region_2depth_name + ' ' + result[0].address.region_3depth_name;
				const stationName = result[0].address.region_3depth_name;
				setLocation({ myLocation, stationName });
				localStorage.setItem('myLocation', JSON.stringify({ myLocation, stationName }));
			}
		};

		geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
		setIsLoading(false);
	};

	// Geolocation의 `getCurrentPosition` 메소드에 대한 실패 callback 핸들러
	const handleError = (error) => {
		setError(error.message);
	};

	useEffect(() => {
		const localData = localStorage.getItem('myLocation');
		if (localData) {
			setLocation(JSON.parse(localData));
			setIsLoading(false);
			setError(null);
		} else {
			const { geolocation } = navigator;

			// 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
			if (!geolocation) {
				setError('Geolocation is not supported.');
				return;
			}
			// Geolocation API 호출
			geolocation.getCurrentPosition(handleSuccess, handleError);
		}
	}, []);

	return { location, error, isLoading };
};

export default useCurrentLocation;
