import { useState, useEffect } from 'react';
import SingleCard from './components/single-card';

const cardImages = [
	{ src: '/assets/helmet-1.png', matched: false },
	{ src: '/assets/potion-1.png', matched: false },
	{ src: '/assets/ring-1.png', matched: false },
	{ src: '/assets/scroll-1.png', matched: false },
	{ src: '/assets/shield-1.png', matched: false },
	{ src: '/assets/sword-1.png', matched: false },
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);
	const [disabled, setDisabled] = useState(false);

	/** shuffle cards */
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	/** handle a choice */
	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
	};

	/** compare two selected cards */
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);

			if (choiceOne.src === choiceTwo.src) {
				console.log('the selected cards match');
				setCards((previousCard) => {
					return previousCard.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
				resetTurn();
			} else {
				console.log("the selected cards don't match");
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [choiceOne, choiceTwo]);

	/** reset choices and increase turn count */
	const resetTurn = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((previousTurn) => previousTurn + 1);
		setDisabled(false);
	};

	/** automatically start a new game */
	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div className="app">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className="card-grid">
				{cards.map((card) => (
					<SingleCard
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
};

export default App;
