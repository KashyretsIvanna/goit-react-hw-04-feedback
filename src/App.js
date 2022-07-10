import { Component } from 'react';
import './App.css';
import Container from './components/container';

const stateInfo = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = {
    ...stateInfo,
  };

  handleLeaveFeedback = e => {
    this.handleSetPoint(e.target.value);
  };

  handleTotalPoint = () => {
    return {
      total: this.state.good + this.state.neutral + this.state.bad,
      positivePercentage:
        Math.round(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100
        ) + '%',
    };
  };

  handleSetPoint = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  render() {
    return (
      <div className="App">
        <Container
          onLeaveFeedback={this.handleLeaveFeedback}
          state={this.state}
          onTotalPoint={this.handleTotalPoint}
        />
      </div>
    );
  }
}

export default App;
