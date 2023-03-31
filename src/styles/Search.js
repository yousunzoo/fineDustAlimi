import styled from 'styled-components';

export const SelectContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 0 20px;
	justify-content: space-between;
	.select {
		width: 48%;
		height: 40px;
	}
`;

export const MessageContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 200px;
	top: 160px;
	right: 0;
	left: 0;
	margin: auto;
	text-align: center;
	img {
		width: 200px;
		height: 200px;
		margin-bottom: 20px;
	}
	p {
		font-size: 20px;
	}
`;
