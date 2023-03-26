const switchGrade = (pm10Grade) => {
	switch (pm10Grade * 1) {
		case 1:
			return {
				backgroundColor: '#547DBF',
				grade: '좋음',
				emoji: '🥰',
			};
		case 2:
			return {
				backgroundColor: '#30A952',
				grade: '보통',
				emoji: '🙂',
			};
		case 3:
			return {
				backgroundColor: '#F58E1E',
				grade: '한 때 나쁨',
				emoji: '🤨',
			};
		case 4:
			return {
				backgroundColor: '#E64D25',
				grade: '나쁨',
				emoji: '☹️',
			};
		case 5:
			return {
				backgroundColor: '#212121',
				grade: '매우 나쁨',
				emoji: '😡',
			};
		default:
			return {
				backgroundColor: '#5F5F5F',
				grade: '알 수 없음',
				emoji: '🫥',
			};
	}
};

export default switchGrade;
