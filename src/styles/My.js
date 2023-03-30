import styled from 'styled-components';

export const MyCard = styled.div`
	width: 90%;
	margin: auto;
	height: 500px;
	background-color: white;
	border-radius: 20px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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

export const FineDustCard = styled.div`
	width: 100%;
	height: 400px;
	position: relative;
	padding: 0 10px;
	background-color: ${({ style }) => style.background};
	color: ${({ style }) => style.color};
	.updateTime {
		position: absolute;
		top: 20px;
		right: 20px;
		margin-bottom: 10px;
		font-size: 14px;
		color: #505050;
	}
	.weather {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.weatherIcon {
			width: 60px;
			height: 60px;
		}
		.temperature {
			font-size: 20px;
		}
	}
	.emoji {
		display: block;
		margin: auto;
		width: 150px;
		height: 150px;
		opacity: 0.9;
		margin-bottom: 30px;
	}
	.pm10grade {
		text-align: center;
		font-size: 40px;
		color: ${({ style }) => style.color};
		font-weight: 600;
		margin-bottom: 20px;
	}
	.dataArea {
		display: flex;
		width: 100%;
		.dataContainer {
			width: 50%;
			text-align: center;
			.dataTitle {
				margin-bottom: 10px;
			}
			.dataContents {
				display: flex;
				justify-content: center;
				align-items: center;
				.grade {
					font-size: 18px;
					margin-right: 10px;
					color: ${({ style }) => style.color};
				}
				.value {
					font-size: 14px;
					padding: 4px 6px;
					background-color: ${({ style }) => style.color};
					border-radius: 6px;
					color: white;
					span {
						font-weight: 700;
						color: inherit;
					}
				}
			}

			&.pm25 {
				.grade {
					color: ${({ pm25color }) => pm25color};
				}
				.value {
					background-color: ${({ pm25color }) => pm25color};
				}
			}
		}
	}
`;
