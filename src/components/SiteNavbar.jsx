import React from 'react';
import { ImStarFull, ImLocation, ImMap } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import * as S from '../style';

function SiteNavbar() {
	return (
		<S.SiteNavbar>
			<NavLink activeclassname='active' to='/'>
				<ImLocation />
				<span>내 위치 보기</span>
			</NavLink>
			<NavLink activeclassname='active' to='/nationwide'>
				<ImMap />
				<span>전국 위치</span>
			</NavLink>
			<NavLink activeclassname='active' to='/favorites'>
				<ImStarFull />
				<span>즐겨찾기</span>
			</NavLink>
		</S.SiteNavbar>
	);
}

export default SiteNavbar;
