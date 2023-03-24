import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as S from '../style';
import ContentsArea from './ContentsArea';
import SelectTab from './SelectTab';
import SiteNavbar from './SiteNavbar';
function Container() {
	return (
		<BrowserRouter>
			<S.Container>
				<SelectTab />
				<ContentsArea />
				<SiteNavbar />
			</S.Container>
		</BrowserRouter>
	);
}

export default Container;
