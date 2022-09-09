const SingleCard = ({ card, handleChoice, flipped }) => {
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className="card">
			<div className={flipped ? 'flipped' : ''}>
				<img src={card.src} alt="Card Image" className="front" />
				<img
					src="/assets/cover.png"
					alt="Card Cover"
					className="back"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default SingleCard;
