export const Feedback = ({countFeedback, totalFeedback}) => {
    return (
        <div>
            <p> Good: {countFeedback.good}</p>
            <p> Neutral: {countFeedback.neutral}</p>
            <p> Bad: {countFeedback.bad} </p>
            <p> Total: {totalFeedback} </p>
        </div>
    );
};