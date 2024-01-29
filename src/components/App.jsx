import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';
import { Notification } from './Notification';

import { useState, useEffect } from 'react';

export const App = () => {
  const [countFeedback, setCountFeedback] = useState(() => {
    // Зчитуємо значення за ключем
    const savedObject = window.localStorage.getItem("saved-countFeedback");
  
    // Якщо там щось є, парсимо і повертаємо  це значення як початкове значення стану
    if (savedObject !== null) {
      //console.log(savedObject);
      return JSON.parse(savedObject);
    }
  
    // У протилежному випадку повертаємо яке-небудь значення за замовчуванням
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-countFeedback', JSON.stringify(countFeedback));
  }, [countFeedback]);

  const onFeedbackSelection = (option) => {
    setCountFeedback ({
      ...countFeedback,
      [option]: countFeedback[option] + 1
    });
  };

  const onResetCountFeedback = () => {
    setCountFeedback({
      ...countFeedback,
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  const isFeedback = countFeedback.good+countFeedback.neutral+countFeedback.bad === 0;
  //console.log(isFeedback);

  return (
  <>
    <Description/>
    <Options 
      onFeedbackSelection={onFeedbackSelection} isFeedback={isFeedback} onResetCountFeedback={onResetCountFeedback}
    />
    {
      isFeedback ? 
      <Notification noFeedback="No feedback yet"/> : 
      <Feedback 
      countFeedback={countFeedback}
    />
    }

    </>
 );
};




//---------------------------------------------------------//
/*export const App = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated: ", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated: ", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated: ", first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
    </>
  );
};*/
//-----------------------------------------------------//
/*export const App = () => {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};*/