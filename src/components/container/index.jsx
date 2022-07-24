import React from 'react';
import Statistics from '../statistics';
import FeedbackOptions from '../feedback';
import Section from '../section';
import Notification from '../message';
import PropTypes from 'prop-types';

const Container = ({ good, neutral, bad, onLeaveFeedback, onTotalPoint }) => {
	return (
		<Section title="Please leave feedback">
			<FeedbackOptions
				options={['good', 'neutral', 'bad']}
				onLeaveFeedback={onLeaveFeedback}
			/>
			<h2>Statistics</h2>
			{good === 0 && bad === 0 && neutral === 0 ? (
				<Notification message="There is no feedback" />
			) : (
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					onTotalPoint={onTotalPoint}
				/>
			)}
		</Section>
	);
};

Container.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
	onTotalPoint: PropTypes.func.isRequired,
};

export default Container;
