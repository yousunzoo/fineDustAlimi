import React, { useEffect, useState } from 'react';
import Loader from '../components/common/Loader';
import Select from 'react-select';
import * as S from '../styles/Search';
import { useGetSidoDataQuery } from '../store/apis/fineDustApi';
import { sidoData } from '../constants/sidoData';
import Message from '../components/Message';
import StationCard from '../components/common/StationCard';
import { useDispatch } from 'react-redux';
import { getSido, getStation } from '../store/slices/fineDustSlice';

function Search() {
	const [sidoName, setSidoName] = useState(sidoData[0].value);
	const [stationData, setStationData] = useState([]);
	const { data, isLoading, isFetching } = useGetSidoDataQuery(sidoName);
	const [stationName, setStationName] = useState('');
	const dispatch = useDispatch();

	const handleSelect = (e) => {
		const findSido = sidoData.filter((item) => item.value === e.value);
		if (findSido.length > 0) {
			setSidoName(e.value);
			setStationName('');
			setStationData([]);
			return;
		}
		setStationName(e);
		dispatch(getStation(e.value));
	};

	useEffect(() => {
		if (!isLoading) {
			const newArr = data['items'].map((item) => {
				return { value: item.stationName, label: item.stationName };
			});
			setStationData(newArr);
			dispatch(getSido(data['items']));
		}
	}, [data]);

	return (
		<>
			<S.SelectContainer>
				<Select className='select' defaultValue={sidoData[0]} options={sidoData} onChange={handleSelect} />
				<Select className='select' value={stationName} options={stationData} onChange={handleSelect} />
			</S.SelectContainer>
			{isLoading || isFetching ? <Loader /> : !stationName ? <Message /> : <StationCard stationName={stationName['value']} />}
		</>
	);
}

export default Search;
