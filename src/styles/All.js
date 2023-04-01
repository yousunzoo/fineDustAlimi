import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardsContainer = styled.div`
	padding: 20px;
	width: 100%;
	height: calc(100vh - 200px);
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> .updateTime {
		width: 100%;
		text-align: center;
		margin-bottom: 20px;
	}
`;

export const Card = styled(motion.div)`
	width: 48%;
	height: 200px;
	padding: 20px;
	border-radius: 20px;
	margin-bottom: 20px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	background-color: ${({ theme }) => theme.grade10.background};
	cursor: pointer;
	.infoWrapper {
		display: flex;
		align-items: flex-end;
		margin-bottom: 40px;
		.name {
			flex: 1;
			.sidoName {
				margin-bottom: 6px;
			}
			.stationName {
				font-size: 18px;
			}
		}
		.emoji {
			width: 80px;
			height: 80px;
		}
	}
	p {
		font-size: 13px;
		.grade {
			font-size: 16px;
			font-weight: 600;
			margin-bottom: 24px;
		}
	}

	.pm10Value {
		font-size: 13px;
		margin-bottom: 6px;
		.grade {
			color: ${({ theme }) => theme.grade10.color};
		}
	}
	.pm25Value {
		font-size: 13px;
		.grade {
			color: ${({ theme }) => theme.grade25.color};
		}
	}
`;

export const Modal = styled(motion.div)`
	position: absolute;
	top: -60px;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	.closeBtn {
		display: block;
		width: 50px;
		height: 50px;
		margin: auto;
		margin-top: 30px;
		svg {
			width: 50px;
			height: 50px;
			path {
				color: white;
			}
		}
	}
`;
