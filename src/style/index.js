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
	.select-menu {
		width: 120px;
		height: 40px;
		margin-left: 10px;
	}
`;

export const MenuButton = styled.button`
	margin-right: auto;
	background-color: transparent;
	border: none;
	font-size: 24px;
	cursor: pointer;
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
	a {
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
		&:hover {
			font-weight: 700;
		}
		&.active {
			font-weight: 700;
			color: blue;
		}
	}
`;

export const NationCardArea = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	height: calc(100vh - 180px);
	padding: 30px 0;
	box-sizing: border-box;
	overflow-y: scroll;
`;

export const ChooseArea = styled(NationCardArea)`
	flex-direction: column;
	align-items: center;
	padding: 30px 20px;
	svg {
		width: 100px;
		height: 100px;
		color: #767475;
		margin-bottom: 20px;
	}
`;
export const ChartArea = styled.div`
	background-color: #fff;
	border-radius: 10px;
	width: 100%;
	padding: 10px;
	box-sizing: border-box;
	text-align: center;
`;

export const NowArea = styled(ChartArea)`
	margin-bottom: 20px;
	position: relative;
	display: flex;
	align-items: center;
	background-color: ${({ background }) => background};
	height: 160px;
	padding: 0 30px;
	padding-top: 30px;
	box-sizing: border-box;
	color: white;
	.stationName {
		width: 40%;
		text-align: left;
		font-size: 40px;
	}
	.gradeArea {
		width: 30%;
		p {
			margin-bottom: 6px;
			&:last-child {
				margin-bottom: 0;
				font-weight: 700;
			}
		}
	}
	.valueArea {
		width: 30%;
		p {
			margin-bottom: 6px;
			&:last-child {
				margin-bottom: 0;
				font-weight: 700;
			}
		}
	}
`;

export const NationCard = styled.div`
	position: relative;
	width: 360px;
	height: 150px;
	display: flex;
	align-items: flex-end;
	background-color: ${({ background }) => background};
	border-radius: 6px;
	margin-bottom: 20px;
	padding: 30px 20px;
	box-sizing: border-box;
	color: white;
	.grade {
		font-size: 20px;
		font-weight: 700;
	}
`;

export const UpdateTime = styled.p`
	position: absolute;
	top: 20px;
	left: 20px;
`;
export const GradeEmoji = styled.p`
	font-size: 60px;
	margin-right: 14px;
`;

export const LocationArea = styled.div`
	width: 56%;
	height: 60px;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Location = styled.p`
	font-size: 18px;
	.sidoName {
		font-size: 14px;
		margin-left: 6px;
	}
`;

export const InfoArea = styled.div`
	width: 30%;
	align-self: flex-end;
	font-size: 14px;
	text-align: right;
	line-height: 1.6;
`;

export const AddFavoriteButton = styled.button`
	position: absolute;
	top: 20px;
	right: 24px;
	display: block;
	width: 30px;
	height: 30px;
	font-size: 30px;
`;

export const Loader = styled.div`
	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 48px;
	height: 48px;
	border: 5px solid;
	border-color: #8ac0cf transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
`;
