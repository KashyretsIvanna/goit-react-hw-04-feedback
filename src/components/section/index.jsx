import PropTypes from 'prop-types';

const Section = props => {
	return (
		<div className="container">
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Section;
