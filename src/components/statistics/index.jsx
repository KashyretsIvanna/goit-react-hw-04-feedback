import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, onTotalPoint }) => {
	return (
		<Fragment>
			<div>good:{good}</div>
			<div>neutral:{neutral}</div>
			<div>bad:{bad}</div>
			<div>total:{onTotalPoint().total}</div>
			<div>positivePercentage:{onTotalPoint().positivePercentage}</div>
		</Fragment>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	onTotalPoint: PropTypes.func.isRequired,
};

export default Statistics;
