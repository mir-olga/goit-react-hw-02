export const Feedback = ({countFeedback, total, positive}) => {
    return (
        <div>
            <p> Good: {countFeedback.good}</p>
            <p> Neutral: {countFeedback.neutral}</p>
            <p> Bad: {countFeedback.bad} </p>
            <p> Total: {total} </p>
            <p> Positive: {positive} </p>
        </div>
    );
};