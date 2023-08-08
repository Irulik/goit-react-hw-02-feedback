import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyled, MainTitle } from './Global.styled'; 


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onAddFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round(this.state.good * 100 / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage() || 0;

    return (
      <>
        <GlobalStyled />
        <MainTitle>Feedback App</MainTitle>
        <Section title='Please, leave feedback!'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onAddFeedback} />
        </Section>
        <Section title='Statistics'>
          {(total > 0) ? (<Statistics
            goodCounter={good}
            neutralCounter={neutral}
            badCounter={bad}
            total={total}
            positivePercentage={positivePercentage} />):(<Notification
              message='No feedback given' />)}
        </Section>
      </>
    );
  }
}

export default App;