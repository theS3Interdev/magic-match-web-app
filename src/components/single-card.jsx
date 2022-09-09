const SingleCard = ({ card, handleChoice }) => {
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className="card">
			<div>
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
