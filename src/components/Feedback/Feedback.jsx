import css from './Feedback.module.css';

export const Feedback = ({countFeedback}) => {

    let totalFeedback=countFeedback.good+countFeedback.neutral+countFeedback.bad;
    let positivePercentage = 0;

    if (totalFeedback>0){
        positivePercentage = Math.round(((countFeedback.good + countFeedback.neutral) / totalFeedback) * 100);
      }
    
    return (
        <div className={css.feedback}>
            <p> Good: {countFeedback.good}</p>
            <p> Neutral: {countFeedback.neutral}</p>
            <p> Bad: {countFeedback.bad} </p>
            <p> Total: {totalFeedback} </p>
            <p> Positive: {positivePercentage} </p>
        </div>
    );
};