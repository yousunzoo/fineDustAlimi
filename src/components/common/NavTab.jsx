import React from 'react';
import * as S from '../../styles/Navtab';
import { GrHomeRounded, GrSearch, GrMapLocation, GrFavorite } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

function NavTab() {
	return (
		<S.TabsWrapper>
			<NavLink className='TabButton' activeclassname='active' to='/'>
				<GrHomeRounded />
			</NavLink>
			<NavLink className='TabButton' activeclassname='active' to='/search'>
				<GrSearch />
			</NavLink>
			<NavLink className='TabButton' activeclassname='active' to='/all'>
				<GrMapLocation />
			</NavLink>
			<NavLink className='TabButton' activeclassname='active' to='/favorites'>
				<GrFavorite />
			</NavLink>
		</S.TabsWrapper>
	);
}

export default NavTab;
