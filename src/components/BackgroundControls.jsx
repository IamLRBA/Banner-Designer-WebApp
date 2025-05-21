import React from "react";
import { SketchPicker } from "react-color";
import { FaUpload } from "react-icons/fa";

const BackgroundControls = ({
  background,
  handleBackgroundChange,
  handleFileUpload,
  uploads,
  currentImageIndex,
  handleRightClick,
  setCurrentImageIndex,
  setBackgroundImage,
}) => {
  return (
    <div className="tool-section">
      <label>
        <FaUpload /> Background
      </label>
      <input type="file" onChange={handleFileUpload} />
      <SketchPicker
        color={background}
        onChangeComplete={handleBackgroundChange}
      />

      <label>
        <FaUpload /> Uploads
      </label>
      <div className="uploads-container">
        {uploads.map((file, index) => (
          <div
            key={index}
            className="thumbnail-container"
            onContextMenu={(e) => handleRightClick(index, e)}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("imageIndex", index)}
          >
            <img
              src={file}
              alt="Uploaded"
              className={`upload-thumbnail ${
                currentImageIndex === index ? "thumbnail-active" : ""
              }`}
              onClick={() => {
                setCurrentImageIndex(index);
                setBackgroundImage(file);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundControls;