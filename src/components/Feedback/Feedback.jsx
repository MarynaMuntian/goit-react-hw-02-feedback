import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
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
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.state.good ? this.countPositiveFeedbackPercentage() : 0}%</p>
      </div>
    );
  }
}

export default Feedback;
