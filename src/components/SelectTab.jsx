import React from 'react';

import { GrMenu } from 'react-icons/gr';
import Select from 'react-select';
import * as S from '../style';
function SelectTab() {
	return (
		<S.SelectTabArea>
			<button>
				<GrMenu />
			</button>
			<Select></Select>
			<Select></Select>
		</S.SelectTabArea>
	);
}

export default SelectTab;
