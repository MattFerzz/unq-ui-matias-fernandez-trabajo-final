import { useEffect, useState } from "react";
import pop from "../assets/pop.m4a";
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
        const popSound = new Audio(pop);
        setShownActiveChoice(options[shownIndex].value);
        popSound.volume = .05;
        popSound.play();
        setShownIndex((shownIndex + 1) % options.length);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setShownActiveChoice(activeChoice);
    }
  }, [activeChoice, animated, options, shownIndex, setShownActiveChoice]);

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
