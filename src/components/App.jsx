import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

import { useState, useEffect } from 'react';

export const App = () => {
    const [countFeedback, setCountFeedback] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-countFeedback");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const [clicks, setClicks] = useState(() =>{
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
  })

  useEffect(() => {
    window.localStorage.setItem('saved-countFeedback', JSON.stringify(countFeedback));
    window.localStorage.setItem('saved-clicks', clicks);
  }, [countFeedback,clicks]);

  const onFeedbackSelection = (option) => {
    setCountFeedback ({
      ...countFeedback,
      [option]: countFeedback[option] + 1
    });
    
    setClicks(clicks + 1);
  };

  const onResetCountFeedback = () => {
    setCountFeedback({
      ...countFeedback,
      good: 0,
      neutral: 0,
      bad: 0
    });

    setClicks(0);
  };

  const hasFeedback = clicks === 0;

  return (
  <>
    <Description/>
    <Options 
      onFeedbackSelection={onFeedbackSelection} hasFeedback={hasFeedback} onResetCountFeedback={onResetCountFeedback}
    />
    {
      hasFeedback ? 
      <Notification noFeedback="No feedback yet"/> : 
      <Feedback 
      countFeedback={countFeedback}
    />
    }
    </>
 );
};