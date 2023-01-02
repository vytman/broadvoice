import React from 'react';
import './App.css';
import { Buttons } from './components/buttons/Buttons';
import { Card } from './components/card/Card';
import dataset from './dataset.json';

function App() {
	const [baby, setBaby] = React.useState<string[]>([]);

	return (
		<>
			<div
				style={{
					display: 'flex',
					marginRight: '0',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '50px',
				}}
			>
				<Buttons
					handleOnClickButton={baby => {
						setBaby(baby);
					}}
					dataset={dataset}
				/>
				<Card baby={baby} />
			</div>
		</>
	);
}

export default App;
