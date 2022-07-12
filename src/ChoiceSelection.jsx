import { useEffect, useState } from "react";
const ChoiceSelection = ({
  options,
  activeChoice,
  setChoice,
  buttonClass,
  animated = false,
}) => {
  const [shownActiveChoice, setShownActiveChoice] = useState(activeChoice);
  const [shownIndex, setShownIndex] = useState(0);
  const handleClick = (value) => {
    setChoice(value);
    setShownActiveChoice(value);
  };
  
  useEffect(() => {
    if (animated && !activeChoice) {
      const interval = setInterval(() => {
        console.log(options[shownIndex])
        setShownActiveChoice(options[shownIndex].value);
        setShownIndex((shownIndex + 1) % options.length);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setShownActiveChoice(activeChoice);
    }
  });

  return (
    <div className="container-selection-buttons">
      {options.map((option, index) => {
        return (
          <button
            className={
              shownActiveChoice === option.value
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
