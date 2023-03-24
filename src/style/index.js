import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 425px;
	height: 100vh;
`;

export const SelectTabArea = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	justify-content: end;
	align-items: center;
	padding: 0 30px;
	box-sizing: border-box;
	background-color: #8ac1cf;

	#dropdown-basic-button {
		width: 80px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		color: black;
		font-size: 16px;
		margin-right: 20px;
		.dropdown-toggle::after {
			margin-left: 20px;
		}
	}
	.dropdown:last-child #dropdown-basic-button {
		margin-right: 0;
	}
`;

export const SelectTab = styled.select`
	width: 120px;
	height: 30px;
	border: none;
`;

export const SiteNavbar = styled.div`
	position: absolute;
	display: flex;
	bottom: 0;
	left: 0;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100px;
	background-color: white;
`;

export const SiteNavButton = styled.a`
	width: 33%;
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	svg {
		width: 24px;
		height: 24px;
		margin-bottom: 10px;
	}
`;
