import { useState } from 'react';

const cardImages = [
	{ src: './assets/helmet-1.png' },
	{ src: './assets/portion-1.png' },
	{ src: './assets/ring-1.png' },
	{ src: './assets/scroll-1.png' },
	{ src: './assets/sheild-1.png' },
	{ src: './assets/sword-1.png' },
];

const App = () => {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	/** shuffle cards */
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	console.log(cards, turns);

	return (
		<div className="app">
			<h1>Magic Match</h1>
			<button onClick={shuffleCards}>New Game</button>
		</div>
	);
};

export default App;
