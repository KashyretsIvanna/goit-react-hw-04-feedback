import { Component } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    onTotalPoint: PropTypes.func.isRequired,
  };

  render() {
    const { good, neutral, bad, onTotalPoint } = this.props;
    return (
      <Fragment>
        <div>good:{good}</div>
        <div>neutral:{neutral}</div>
        <div>bad:{bad}</div>
        <div>total:{onTotalPoint().total}</div>
        <div>positivePercentage:{onTotalPoint().positivePercentage}</div>
      </Fragment>
    );
  }
}

export default Statistics;
