import React from 'react';
import Statistics from '../statistics';
import FeedbackOptions from '../feedback';
import Section from '../section';
import Notification from '../message';
import PropTypes from 'prop-types';

class Container extends React.Component {
  static propTypes = {
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
    onTotalPoint: PropTypes.func.isRequired,
  };

  render() {
    const { good, neutral, bad } = this.props.state;
    const { onTotalPoint } = this.props;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.props.state)}
          onLeaveFeedback={this.props.onLeaveFeedback}
        />
        <h2>Statistics</h2>
        {this.props.state.good === 0 &&
        this.props.state.bad === 0 &&
        this.props.state.neutral === 0 ? (
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
  }
}

export default Container;
