import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: '9시간 동안의 미세먼지 농도 변화',
		},
	},
};

function Chart({ name, stationData }) {
	const data = {
		labels: stationData.labels,
		datasets: [
			{
				label: name,
				data: stationData.data,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	return <Line options={options} data={data} />;
}

export default Chart;
