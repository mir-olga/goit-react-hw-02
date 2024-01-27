export const Feedback = ({countFeedback}) => {
    return (
        <div>
            <p> Good: {countFeedback.good}</p>
            <p> Neutral: {countFeedback.neutral}</p>
            <p> Bad: {countFeedback.bad} </p>
        </div>
    );
};