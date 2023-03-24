import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getDatas } from '../store/slice/dustSlice';
import * as S from '../style';
import SelectTab from './SelectTab';
import SiteNavbar from './SiteNavbar';
function Container() {
	const { fineDustData } = useSelector((state) => state.dust);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDatas());
	}, []);
	return (
		<BrowserRouter>
			<S.Container>
				<SelectTab />
				<div></div>
				<SiteNavbar />
			</S.Container>
		</BrowserRouter>
	);
}

export default Container;
