import React from 'react';
import { ImStarFull, ImLocation, ImMap } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';

function SiteNavbar() {
	const navigate = useNavigate();

	return (
		<S.SiteNavbar>
			<S.SiteNavButton onClick={() => navigate('/')}>
				<ImLocation />
				<span>내 위치 보기</span>
			</S.SiteNavButton>
			<S.SiteNavButton onClick={() => navigate('/nationwide')}>
				<ImMap />
				<span>전국 위치</span>
			</S.SiteNavButton>
			<S.SiteNavButton onClick={() => navigate('/favorites')}>
				<ImStarFull />
				<span>즐겨찾기</span>
			</S.SiteNavButton>
		</S.SiteNavbar>
	);
}

export default SiteNavbar;
