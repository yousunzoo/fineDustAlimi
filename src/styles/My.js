import styled from 'styled-components';

export const MyCard = styled.div`
	width: 90%;
	margin: auto;
	height: 500px;
	background-color: white;
	border-radius: 20px;
`;

export const MyLocation = styled.div`
	width: 100%;
	padding: 0 10px;
	height: 60px;
	display: flex;
	align-items: center;
	font-size: 16px;
	.nowLocation {
		margin-left: 15px;
		position: relative;
		&::after {
			position: absolute;
			top: 0;
			left: -8px;
			display: block;
			content: '';
			width: 1px;
			height: 100%;
			background-color: #3e3e3e;
		}
	}
`;
