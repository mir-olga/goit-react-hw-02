import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';
import { Notification } from './Notification';

import { useState } from 'react';

export const App = () => {
  const [countFeedback, setCountFeedback] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const [totalFeedback, setTotalFeedback] = useState(0);

  const changeCountFeedback = (option) => {
    setCountFeedback ({
      ...countFeedback,
      [option]: countFeedback[option] + 1
    });

    setTotalFeedback(totalFeedback+1);
  };

  const onResetCountFeedback = () => {
    setCountFeedback({
      ...countFeedback,
      good: 0,
      neutral: 0,
      bad: 0
    });

    setTotalFeedback(0);
  };

  let total=countFeedback.good+countFeedback.neutral+countFeedback.bad;
  let positive = Math.round(((countFeedback.good + countFeedback.neutral) / total) * 100);
  
  return (
  <>
    <Description/>
    <Options 
      onUpdate={changeCountFeedback} totalFeedback={totalFeedback} onReset={onResetCountFeedback}
    />
    {
      totalFeedback==0 ? 
      <Notification /> : 
      <Feedback 
      countFeedback={countFeedback}
      total={total}
      positive={positive}
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