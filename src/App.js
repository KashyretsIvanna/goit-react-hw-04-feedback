import './App.css';
import Container from './components/container';
import { useState } from 'react';

const stateInfo = {
	good: 0,
	neutral: 0,
	bad: 0,
};

const App = () => {
	const [good, setGood] = useState(stateInfo.good);
	const [neutral, setNeutral] = useState(stateInfo.neutral);
	const [bad, setBad] = useState(stateInfo.bad);

	const handleLeaveFeedback = e => {
		if (e.target.value === 'good') {
			setGood(good => good + 1);
		} else if (e.target.value === 'neutral') {
			setNeutral(neutral => neutral + 1);
		} else if (e.target.value === 'bad') {
			setBad(bad => bad + 1);
		}
	};

	const handleTotalPoint = () => {
		return {
			total: good + neutral + bad,
			positivePercentage:
				Math.round((good / (good + neutral + bad)) * 100) + '%',
		};
	};

	return (
		<div className="App">
			<Container
				onLeaveFeedback={handleLeaveFeedback}
				good={good}
				neutral={neutral}
				bad={bad}
				onTotalPoint={handleTotalPoint}
			/>
		</div>
	);
};

export default App;
