import React, { useState } from 'react';
import Section from './component/Section';
import Feedback from './component/Feedback';
import Statistics from './component/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = ['good', 'neutral', 'bad'];

  const hendleIncrement = feedback => {
    console.log(feedback);
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <Section>
      <Feedback
        title="Please leave feedback"
        options={feedbackOptions}
        onLeaveFeedback={hendleIncrement}
      />

      <Statistics
        title="Statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positiveFeedback={positiveFeedback}
      />
    </Section>
  );
}
export default App;
