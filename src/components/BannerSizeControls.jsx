import React from "react";
import { FaArrowsAlt, FaPlus, FaMinus } from "react-icons/fa";

const BannerSizeControls = ({
  width,
  setWidth,
  height,
  setHeight,
  borderRadius,
  setBorderRadius,
}) => {
  return (
    <div className="tool-section">
      <label>
        <FaArrowsAlt /> Banner Size
      </label>

      <div className="control-group">
        <label>Width: {width}px</label>
        <input
          type="range"
          min="100"
          max="1200"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <div className="button-group">
          <button onClick={() => setWidth((prev) => Math.max(100, prev - 50))}>
            <FaMinus />
          </button>
          <button onClick={() => setWidth((prev) => prev + 50)}>
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="control-group">
        <label>Height: {height}px</label>
        <input
          type="range"
          min="50"
          max="800"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
        />
        <div className="button-group">
          <button onClick={() => setHeight((prev) => Math.max(50, prev - 50))}>
            <FaMinus />
          </button>
          <button onClick={() => setHeight((prev) => prev + 50)}>
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="control-group">
        <label>Border Radius: {borderRadius}px</label>
        <input
          type="range"
          min="0"
          max="100"
          value={borderRadius}
          onChange={(e) => setBorderRadius(parseInt(e.target.value))}
        />
        <div className="button-group">
          <button onClick={() => setBorderRadius((prev) => Math.max(0, prev - 5))}>
            <FaMinus />
          </button>
          <button onClick={() => setBorderRadius((prev) => prev + 5)}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSizeControls;