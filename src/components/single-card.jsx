const SingleCard = ({ card }) => {
	return (
		<div key={card.id} className="card">
			<div>
				<img src={card.src} alt="Card Image" className="front" />
				<img src="/assets/cover.png" alt="Card Cover" className="back" />
			</div>
		</div>
	);
};

export default SingleCard;
