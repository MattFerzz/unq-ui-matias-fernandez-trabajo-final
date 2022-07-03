import { Link } from "react-router-dom";

const ModeSelection = () => {
  return (
    <div className="mode-selection">
      <div className="mode-selection-container">
        <div className="mode-selection-container-title">
          <h1>Select your mode</h1>
        </div>
        <div className="mode-selection-buttons">
          <Link to="/pve">
            <button className="mode-selection-buttons-button">
              <h2>PVE</h2>
            </button>
          </Link>
          <Link to="/pvp">
            <button className="mode-selection-buttons-button">
              <h2>PVP</h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;
