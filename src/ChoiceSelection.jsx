const ChoiceSelection = (props) => {
  const options = props.options;

  return (
    <div className="container-selection-buttons">
      {options.map((option, index) => {
        return (
          <button
            className="container-selection-button"
            key={index}
            value={option.value}
            onClick={props.handleSelection}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChoiceSelection;
