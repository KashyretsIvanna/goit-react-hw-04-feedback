import { Fragment } from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = props => {
	return (
		<Fragment>
			{props.options.map(el => {
				return (
					<button
						key={el}
						onClick={e => {
							props.onLeaveFeedback(e);
						}}
						value={el}
					>
						{el}
					</button>
				);
			})}
		</Fragment>
	);
};

FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
