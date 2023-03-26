import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as S from '../style';
import ContentsArea from './ContentsArea';
import SelectTab from './SelectTab';
import SiteNavbar from './SiteNavbar';
function Container() {
	const { isLoading } = useSelector((state) => state.dust);
	return (
		<BrowserRouter>
			<S.Container>
				<SelectTab />
				{/* {isLoading ? <div>Loading...</div> : } */}
				<ContentsArea />
				<SiteNavbar />
			</S.Container>
		</BrowserRouter>
	);
}

export default Container;
