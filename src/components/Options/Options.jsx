import css from './Options.module.css';

export const Options = ({ onFeedbackSelection, onResetCountFeedback, hasFeedback}) => {
  
    return (
        <div  className={css.options}>
            <button className={css.button} onClick={() => onFeedbackSelection("good")} >Good</button>
            <button className={css.button} onClick={() => onFeedbackSelection("neutral")} >Neutral</button>
            <button className={css.button} onClick={() => onFeedbackSelection("bad")} >Bad </button>
            {!hasFeedback && <button className={css.button} onClick={() => onResetCountFeedback()} >Reset </button>}
         </div>
    );
};