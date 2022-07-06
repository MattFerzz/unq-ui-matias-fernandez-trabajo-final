const ChoiceSelection = (props) => {
  const options = props.options;

  const handleClick = (value) => {
    props.handleSelection(value);
  };
  return (
    <div className="container-selection-buttons">
      {options.map((option, index) => {
        return (
          <button
            className="container-selection-button"
            key={index}
            value={option.value}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChoiceSelection;
