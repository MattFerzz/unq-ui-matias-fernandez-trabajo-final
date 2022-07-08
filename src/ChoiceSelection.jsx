import { useEffect } from "react";
const ChoiceSelection = ({
  options,
  activeChoice,
  setChoice,
  buttonClass,
}) => {
  const handleClick = (value) => {
    setChoice(value);
  };
  return (
    <div className="container-selection-buttons">
      {options.map((option, index) => {
        return (
          <button
            className={
              activeChoice === option.value
                ? buttonClass + " active"
                : buttonClass
            }
            key={index}
            value={option.value}
            onClick={() => handleClick(option.value)}
            title={option.title}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChoiceSelection;
