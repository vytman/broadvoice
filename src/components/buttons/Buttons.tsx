import React from 'react';

interface ButtonsProps {
	handleOnClickButton: (baby: string[]) => void;
	dataset: string[][];
}

enum Filter {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export const Buttons: React.FC<ButtonsProps> = props => {
	const { handleOnClickButton, dataset } = props;

	const handleOnClick = React.useCallback(
		(isMale: boolean) => {
			const filter = isMale ? Filter.MALE : Filter.FEMALE;
			const filteredByGender = dataset.filter(baby => baby[1] === filter);

			const baby = filteredByGender[Math.floor(Math.random() * filteredByGender.length)];
			handleOnClickButton(baby);
		},
		[dataset, handleOnClickButton]
	);

	return (
		<div style={{ display: 'flex', width: '80%', justifyContent: 'space-around' }}>
			<button onClick={() => handleOnClick(false)}>Female</button>
			<button onClick={() => handleOnClick(true)}>Male</button>
		</div>
	);
};
