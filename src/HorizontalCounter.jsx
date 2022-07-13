const HorizontalCounter = ({ columns }) => {
  return (
    <div className="horizontal-counter">
      {columns.map((column, index) => {
        return (
          <div className="horizontal-counter-column" key={index}>
            <div className="horizontal-counter-column-title">
              <h3 className="horizontal-counter-column-title">{column.title}</h3>
            </div>
            <div className="horizontal-counter-column-value">
              <h2 className="horizontal-counter-column-value">{column.value}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalCounter;