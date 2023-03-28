import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useGetFineDustDataQuery } from '../api/fineDustApi';
import { sidoName } from '../constants/sidoName';
import * as S from '../style';

function SelectTab() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [select, setSelect] = useState(sidoName[0].value);
	const { data, isLoading } = useGetFineDustDataQuery(select);
	const [station, setStation] = useState('');
	const handleSidoChange = (e) => {
		setSelect(e.value);
		setStation('');
		if (pathname.includes('/nationwide')) {
			navigate(`/nationwide/${e.value}`);
		}
	};
	const handleStationChange = (e) => {
		setStation(e);
		navigate(`/${e.value}`);
	};

	return (
		<S.SelectTabArea
			onChange={(e) => {
				console.log(e);
			}}>
			{pathname !== '/favorites' && <Select className='select-menu' defaultValue={sidoName[0]} options={sidoName} onChange={handleSidoChange} />}
			{!isLoading && pathname !== '/favorites' && !pathname.includes('/nationwide') && <Select className='select-menu' value={station} options={data.stationArr} onChange={handleStationChange} />}
		</S.SelectTabArea>
	);
}

export default SelectTab;
