import React from "react";
import { SketchPicker } from "react-color";
import { FaPen, FaHighlighter, FaPaintBrush, FaEraser } from "react-icons/fa";

const DrawingToolsControls = ({
  drawingTool,
  setDrawingTool,
  strokeColor,
  setStrokeColor,
  strokeWeight,
  setStrokeWeight,
  strokeTransparency,
  setStrokeTransparency,
  showDrawOptions,
  setShowDrawOptions,
}) => {
  const clearDrawings = () => {
    const canvas = document.querySelector("canvas");
    canvas?.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <label onClick={() => setShowDrawOptions(!showDrawOptions)}>
        Drawing Tools <FaChevronDown />
      </label>
      {showDrawOptions && (
        <div className="sub-dropdown">
          <div className="flex flex-wrap gap-2 mb-2">
            {["pen", "marker", "brush", "eraser"].map((tool) => (
              <button
                key={tool}
                onClick={() => setDrawingTool(tool)}
                className={`p-2 rounded ${
                  drawingTool === tool ? "bg-blue-200" : "bg-gray-200"
                }`}
                title={tool.charAt(0).toUpperCase() + tool.slice(1)}
              >
                {tool === "pen" && <FaPen />}
                {tool === "marker" && <FaHighlighter />}
                {tool === "brush" && <FaPaintBrush />}
                {tool === "eraser" && <FaEraser />}
              </button>
            ))}
          </div>

          {drawingTool && drawingTool !== "eraser" && (
            <div className="mb-2">
              <label>Stroke Color:</label>
              <SketchPicker
                color={strokeColor}
                onChangeComplete={(color) => setStrokeColor(color.hex)}
              />
            </div>
          )}

          <div className="mb-2">
            <label>Stroke Width: {strokeWeight}px</label>
            <input
              type="range"
              min="1"
              max="50"
              value={strokeWeight}
              onChange={(e) => setStrokeWeight(parseInt(e.target.value))}
            />
          </div>

          <div className="mb-2">
            <label>
              Transparency: {Math.round(strokeTransparency * 100)}%
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={strokeTransparency}
              onChange={(e) => setStrokeTransparency(parseFloat(e.target.value))}
            />
          </div>

          <button
            onClick={clearDrawings}
            className="mt-2 p-2 bg-red-100 rounded"
          >
            Clear Drawings
          </button>
        </div>
      )}
    </>
  );
};

export default DrawingToolsControls;