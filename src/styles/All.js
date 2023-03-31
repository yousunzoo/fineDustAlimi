import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardsContainer = styled.div`
	padding: 20px;
	width: 100%;
	height: calc(100vh - 200px);
	margin-top: 20px;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.updateTime {
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
	.sidoName {
		margin-bottom: 6px;
	}
	.stationName {
		font-size: 18px;
		margin-bottom: 28px;
	}
	.grade {
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		color: inherit;
		margin-bottom: 24px;
	}
	.pm10Value {
		font-size: 13px;
		margin-bottom: 6px;
	}
	.pm25Value {
		font-size: 13px;
	}
`;
