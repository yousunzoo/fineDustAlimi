import React from 'react';
import { sidoData } from '../../constants/sidoData';
import * as S from '../../styles/Search';

function Select({ data }) {
	const handleChange = (e) => {
		setSidoName(e.value);
	};
	return (
		<S.SelectContainer>
			<Select className='select' options={sidoData} onChange={handleChange} />
			<Select className='select' options={sidoData} />
		</S.SelectContainer>
	);
}

export default Select;
