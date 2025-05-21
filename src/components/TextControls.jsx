import React from "react";
import { SketchPicker } from "react-color";
import { FaTextHeight, FaChevronDown, FaEyeDropper } from "react-icons/fa";

const TextControls = ({
  text,
  setText,
  selectedFont,
  setSelectedFont,
  textStyle,
  setTextStyle,
  textColor,
  handleTextColorChange,
  activateEyeDropper,
  showTextOptions,
  setShowTextOptions,
}) => {
  return (
    <div className="tool-section">
      <label onClick={() => setShowTextOptions(!showTextOptions)}>
        <FaTextHeight /> Text <FaChevronDown />
      </label>
      {showTextOptions && (
        <div className="dropdown">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            style={{
              fontFamily: selectedFont,
              fontWeight:
                textStyle === "bold"
                  ? "bold"
                  : textStyle === "lighter"
                  ? "lighter"
                  : "normal",
              fontStyle:
                textStyle === "italic"
                  ? "italic"
                  : textStyle === "oblique"
                  ? "oblique"
                  : "normal",
              textDecoration:
                textStyle === "underline"
                  ? "underline"
                  : textStyle === "strikethrough"
                  ? "line-through"
                  : "none",
              textTransform:
                textStyle === "uppercase"
                  ? "uppercase"
                  : textStyle === "lowercase"
                  ? "lowercase"
                  : textStyle === "capitalize"
                  ? "capitalize"
                  : "none",
            }}
          />

          <label htmlFor="font-style" className="block text-sm font-medium text-gray-700">
            Font Style
          </label>
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
          >
            <option value="Abril Fatface">Abril Fatface</option>
            <option value="Anton">Anton</option>
            {/* ... other font options ... */}
          </select>

          <label htmlFor="text-style" className="block text-sm font-medium text-gray-700">
            Text Style
          </label>
          <select
            value={textStyle}
            onChange={(e) => setTextStyle(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            {/* ... other text style options ... */}
          </select>

          <div className="color-picker-container">
            <label className="block mb-2 font-medium">Text Color</label>
            <div className="flex items-center gap-2">
              <SketchPicker
                color={textColor}
                onChangeComplete={handleTextColorChange}
                presetColors={[
                  "#000000",
                  "#FFFFFF",
                  /* ... other colors ... */
                ]}
                width="230px"
              />
              <button
                onClick={activateEyeDropper}
                className="eye-dropper-btn"
                title="Pick color from screen"
              >
                <FaEyeDropper size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextControls;