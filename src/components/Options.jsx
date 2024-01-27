export const Options = ({good, neutral, bad, change}) => {
    return (
      <div>
        <button onClick={good} >
        Good
        </button>
        <button onClick={neutral}>
        Neutral
        </button>
        <button onClick={bad} >
        Bad
        </button>
        <button onClick={change} >
        change
        </button>
      </div>
    );
  };