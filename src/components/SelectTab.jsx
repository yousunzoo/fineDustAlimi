import React, { useEffect, useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { sidoName } from '../constants/sidoName';
import { getDatas } from '../store/slice/dustSlice';
import * as S from '../style';

function SelectTab() {
	const dispatch = useDispatch();
	const [select, setSelect] = useState(sidoName[0].value);
	const { stationArr } = useSelector((state) => state.dust);
	const handleChange = (e) => {
		setSelect(e.value);
	};

	useEffect(() => {
		dispatch(getDatas(select));
	}, [select]);

	return (
		<S.SelectTabArea>
			<button>
				<GrMenu />
			</button>
			<Select defaultValue={sidoName[0]} options={sidoName} onChange={handleChange} />
			<Select defaultValue={stationArr[0]} options={stationArr} />
		</S.SelectTabArea>
	);
}

export default SelectTab;
