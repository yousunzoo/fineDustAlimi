import styled from 'styled-components';

export const TabsWrapper = styled.nav`
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 80px;
	background-color: #fff;
	box-shadow: inset;
	box-shadow: 0px -2px 6px -2px gray;
	.TabButton {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25%;
		font-size: 30px;
		border-radius: 20px 20px 0 0;
		background-color: #fff;
		transition: all 0.2s ease-in;
		&:hover {
			transform: translateY(-10px);
			box-shadow: 0px -2px 6px -2px gray;
		}
		&.active {
			transform: translateY(-10px);
			box-shadow: 0px -2px 6px -2px gray;
		}
	}
`;
