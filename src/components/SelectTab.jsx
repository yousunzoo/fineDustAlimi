import React, { useEffect, useRef, useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { sidoName } from '../constants/sidoName';
import { getDatas, getStationData } from '../store/slice/dustSlice';
import * as S from '../style';

function SelectTab() {
	const dispatch = useDispatch();
	const [select, setSelect] = useState(sidoName[0].value);
	const { stationArr, isLoading } = useSelector((state) => state.dust);
	const [station, setStation] = useState('');
	const handleSidoChange = (e) => {
		setSelect(e.value);
		dispatch(getDatas(e.value));
		setStation('');
	};

	useEffect(() => {
		dispatch(getDatas(select));
	}, []);

	return (
		<S.SelectTabArea>
			<S.MenuButton>
				<GrMenu />
			</S.MenuButton>
			<Select className='select-menu' defaultValue={sidoName[0]} options={sidoName} onChange={handleSidoChange} />
			<Select
				className='select-menu'
				value={station}
				options={stationArr}
				onChange={(e) => {
					setStation(e);
					dispatch(getStationData(e.value));
				}}
			/>
		</S.SelectTabArea>
	);
}

export default SelectTab;
