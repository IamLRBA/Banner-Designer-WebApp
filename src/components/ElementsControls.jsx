import React from "react";
import { FaShapes, FaGripLines, FaIcons, FaSmile, FaChevronDown } from "react-icons/fa";

const ElementsControls = ({
  showElementOptions,
  setShowElementOptions,
}) => {
  return (
    <>
      <label onClick={() => setShowElementOptions(!showElementOptions)}>
        Elements <FaChevronDown />
      </label>
      {showElementOptions && (
        <div className="sub-dropdown">
          <div className="tooltip-container">
            <button>
              <FaShapes />
            </button>
            <span className="tooltip">Shapes</span>
          </div>
          <div className="tooltip-container">
            <button>
              <FaGripLines />
            </button>
            <span className="tooltip">Lines</span>
          </div>
          <div className="tooltip-container">
            <button>
              <FaIcons />
            </button>
            <span className="tooltip">Icons</span>
          </div>
          <div className="tooltip-container">
            <button>
              <FaSmile />
            </button>
            <span className="tooltip">Stickers</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ElementsControls;