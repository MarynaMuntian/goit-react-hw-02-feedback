import React from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  addBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      (this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100,
    );
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.addGood}>
          Good
        </button>
        <button type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.addBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.state.good ? this.countPositiveFeedbackPercentage() : 0}
        ></Statistics>
      </div>
    );
  }
}

export default App;
