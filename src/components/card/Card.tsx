interface CardProps {
	baby: string[];
}

export const Card: React.FC<CardProps> = props => {
	const { baby } = props;

	if (!baby.length) {
		return <></>;
	}

	return (
		<>
			<div
				style={{
					width: '300px',
					justifyContent: 'center',
					display: 'flex',
					border: '2px solid #2d2dd270',
					borderRadius: '10px',
					marginTop: '50px',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{/* Name */}
					<h3 style={{ textAlign: 'center' }}>{baby[3]}</h3>
					<div style={{ width: '300px', justifyContent: 'space-around', display: 'flex' }}>
						{/* Gender */}
						<p>{baby[1]}</p>
						{/* Year */}
						<p>{baby[0]}</p>
					</div>
				</div>
			</div>
		</>
	);
};
