import React from 'react';
import { useSelector } from 'react-redux';
import * as S from '../style';
import switchGrade from '../utils/switchGrade';

function Nationwide() {
	const { fineDustData } = useSelector((state) => state.dust);
	console.log(fineDustData);
	return (
		<S.NationCardArea>
			{fineDustData.map((item) => {
				const { grade, emoji, backgroundColor } = switchGrade(item.pm10Grade);
				return (
					<S.NationCard key={item.stationName} style={{ backgroundColor }}>
						<S.GradeEmoji>{emoji}</S.GradeEmoji>
						<S.LocationArea>
							<S.Location>
								{item.stationName}({item.sidoName})
							</S.Location>
							<p>{grade}</p>
						</S.LocationArea>
						<S.InfoArea>
							<p>{item.pm10Value}</p>
							<p>{item.dataTime}</p>
						</S.InfoArea>
					</S.NationCard>
				);
			})}
		</S.NationCardArea>
	);
}

export default Nationwide;
