import React, { useState } from 'react';
import Select from 'react-select';
import Loader from '../components/common/Loader';
import { sidoData } from '../constants/sidoData';
import { useGetSidoDataQuery } from '../store/apis/fineDustApi';
import * as S from '../styles/Search';
function Search() {
	const [sidoName, setSidoName] = useState('전국');
	const { data, isLoading, isFetching, isError } = useGetSidoDataQuery(sidoName);
	console.log(data);
	const handleChange = (e) => {
		setSidoName(e.value);
	};
	if (isLoading || isFetching) return <Loader />;
	return (
		<S.SelectContainer>
			<Select className='select' options={sidoData} onChange={handleChange} />
			<Select className='select' options={sidoData} />
		</S.SelectContainer>
	);
}

export default Search;
