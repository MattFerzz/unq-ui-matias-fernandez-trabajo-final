import { useState } from "react";
const ChoiceSelection = (props) => {
  const options = props.options;
  const [active, setActive] = useState(null);
  const handleClick = (value) => {
    props.handleSelection(value);
    setActive(value)
  };
  return (
    <div className="container-selection-buttons">
      {options.map((option, index) => {
        return (
          <button
            className={
              active === option.value
                ? "container-selection-button active"
                : "container-selection-button"
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
