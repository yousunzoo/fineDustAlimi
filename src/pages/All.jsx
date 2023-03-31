import React, { useEffect, useState } from 'react';
import * as S from '../styles/Search';
import Select from 'react-select';
import { sidoData } from '../constants/sidoData';
import { useGetSidoDataQuery } from '../store/apis/fineDustApi';
import { useDispatch } from 'react-redux';
import { getSido } from '../store/slices/fineDustSlice';
import Loader from '../components/common/Loader';
import CardsContainer from '../components/CardsContainer';
function All() {
	const [sidoName, setSidoName] = useState(sidoData[0].value);
	const { data, isLoading, isFetching } = useGetSidoDataQuery(sidoName);
	const dispatch = useDispatch();
	const handleSelect = (e) => {
		setSidoName(e.value);
		return;
	};
	useEffect(() => {
		if (!isLoading) {
			dispatch(getSido(data['items']));
		}
	}, [data]);
	return (
		<>
			<S.SelectContainer>
				<Select className='allSelect' defaultValue={sidoData[0]} options={sidoData} onChange={handleSelect} />
			</S.SelectContainer>
			{isLoading || isFetching ? <Loader /> : <CardsContainer />}
		</>
	);
}

export default All;
