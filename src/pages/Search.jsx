import React, { useEffect, useState } from 'react';
import Loader from '../components/common/Loader';
import Select from 'react-select';
import * as S from '../styles/Search';
import { useGetSidoDataQuery } from '../store/apis/fineDustApi';
import { sidoData } from '../constants/sidoData';
import Message from '../components/Message';
import StationCard from '../components/common/StationCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSido, setStation } from '../store/slices/fineDustSlice';

function Search() {
	const [sidoName, setSidoName] = useState(sidoData[0].value);
	const [stationArr, setStationArr] = useState([]);
	const { data, isLoading, isFetching } = useGetSidoDataQuery(sidoName);
	const [stationName, setStationName] = useState('');
	const dispatch = useDispatch();

	const handleSelect = (e) => {
		const findSido = sidoData.filter((item) => item.value === e.value);
		if (findSido.length > 0) {
			setSidoName(e.value);
			setStationName('');
			setStationArr([]);
			return;
		}
		setStationName(e);
		dispatch(setStation(e.value));
	};

	useEffect(() => {
		if (!isLoading) {
			const newArr = data['items'].map((item) => {
				return { value: item.stationName, label: item.stationName };
			});
			setStationArr(newArr);
			dispatch(getSido(data['items']));
		}
	}, [data]);

	return (
		<>
			<S.SelectContainer>
				<Select className='select' defaultValue={sidoData[0]} options={sidoData} onChange={handleSelect} />
				<Select className='select' value={stationName} options={stationArr} onChange={handleSelect} />
			</S.SelectContainer>
			{isLoading || isFetching ? <Loader /> : !stationName ? <Message /> : <StationCard />}
		</>
	);
}

export default Search;
