import { Options } from './Options';
import { Feedback } from './Feedback';
import { useState } from 'react';

export const App = () => {
  const [typeFeedback, setTypeFeedback] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  const changeTypeFeedbacks = () => {
    setTypeFeedback ({
      ...typeFeedback,
      good: 1,
    });
  };
  
  return (
  <>
    <Options 
      good={typeFeedback.good}
      neutral={typeFeedback.neutral}
      bad={typeFeedback.bad}
      change={changeTypeFeedbacks}
    />
    <Feedback />
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