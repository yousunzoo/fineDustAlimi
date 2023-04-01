import { AnimatePresence } from 'framer-motion';
import React, { createContext, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/All';
import Card from './Card';
import StationCard from './common/StationCard';
import { SlClose } from 'react-icons/sl';

export const SelectedIdContext = createContext();
function CardsContainer() {
	const { sidoData } = useSelector((state) => state.fineDust);
	const [isSelected, setIsSelected] = useState(false);
	console.log(isSelected);
	return (
		<SelectedIdContext.Provider value={{ isSelected, setIsSelected }}>
			<S.CardsContainer>
				<p className='updateTime'>기준 시간 : {sidoData[0]?.dataTime}</p>
				{sidoData.map((item) => {
					return <Card key={item.stationName} item={item} />;
				})}

				<AnimatePresence>
					{isSelected && (
						<S.Modal>
							<StationCard />
							<button
								className='closeBtn'
								onClick={() => {
									setIsSelected(false);
								}}>
								<SlClose />
							</button>
						</S.Modal>
					)}
				</AnimatePresence>
			</S.CardsContainer>
		</SelectedIdContext.Provider>
	);
}

export default CardsContainer;
