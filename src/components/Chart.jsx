import ApexCharts from 'react-apexcharts';

import React from 'react';

function Chart({ stationData }) {
	return (
		<ApexCharts
			series={[{ name: stationData.name, data: stationData.data }]}
			options={{
				chart: {
					//차트의 툴바와 배경색을 투명으로 바꿈
					height: 250,
					width: 400,
					toolbar: { show: false },
					background: 'white', //투명
				},
				stroke: {
					//선의 커브를 부드럽게 하고, 두께를 3으로 지정
					curve: 'smooth',
					width: 3,
				},
				grid: {
					//격자 없앰
					show: false,
				},
				dataLabels: {
					enabled: true,
				},
				xaxis: {
					categories: stationData.categories,
					title: {
						text: '9시간 동안의 미세먼지 농도',
					},
				},
				yaxis: {
					//y축의 내용 없앰
					show: true,
				},
			}}></ApexCharts>
	);
}

export default Chart;
