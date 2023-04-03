import React from 'react';
import * as S from '../styles/Search';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();
	return (
		<S.MessageContainer className='notfound'>
			<img src='/icons/notfound.png' />
			<p>요청하신 페이지는 없는 페이지입니다!</p>
			<button
				onClick={() => {
					navigate('/');
				}}>
				홈으로 돌아가기
			</button>
		</S.MessageContainer>
	);
}

export default NotFound;
