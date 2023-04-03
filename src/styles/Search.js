import styled from 'styled-components';

export const SelectContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 0 20px;
	justify-content: space-between;
	margin-bottom: 20px;
	.select {
		width: 48%;
		height: 40px;
	}
	.allSelect {
		width: 100%;
		text-align: center;
	}
`;

export const MessageContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 200px;
	top: 150px;
	right: 0;
	left: 0;
	margin: auto;
	text-align: center;
	&.notfound {
		top: 70px;
	}
	img {
		width: 200px;
		height: 200px;
		margin-bottom: 20px;
	}
	p {
		font-size: 20px;
	}
	button {
		font-size: 16px;
		display: block;
		padding: 6px 12px;
		margin: 20px auto;
		border-radius: 5px;
		background-color: #fff;
		border: 1px solid #ccc;
	}
`;
