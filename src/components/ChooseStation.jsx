import React from 'react';
import * as S from '../style';
import { FaSearchLocation } from 'react-icons/fa';
function ChooseStation() {
	return (
		<S.ChooseArea>
			<FaSearchLocation />
			<p>원하는 지역을 선택해주세요</p>
		</S.ChooseArea>
	);
}

export default ChooseStation;
