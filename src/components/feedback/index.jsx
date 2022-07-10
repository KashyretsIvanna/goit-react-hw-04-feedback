import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Fragment>
        {this.props.options.map(el => {
          return (
            <button
              key={el}
              onClick={e => {
                this.props.onLeaveFeedback(e);
              }}
              value={el}
            >
              {el}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

export default FeedbackOptions;
