import { AnimatePresence } from 'framer-motion';
import React, { createContext, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import * as S from '../styles/All';
import Card from './Card';
import StationCard from './common/StationCard';
import { SlClose } from 'react-icons/sl';
import { SelectedIdContext } from './common/Layout';

function CardsContainer({ data }) {
	const { isSelected, setIsSelected } = useContext(SelectedIdContext);
	return (
		<S.CardsContainer>
			<p className='updateTime'>기준 시간 : {data[0]?.dataTime}</p>
			{data.map((item) => {
				return <Card key={item.stationName} item={item} />;
			})}

			<AnimatePresence>
				{isSelected && (
					<S.Modal
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
						transition={{ duration: 0.2, delay: 0.15 }}
						style={{ pointerEvents: 'auto' }}
						className='overlay'>
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
	);
}

export default CardsContainer;
