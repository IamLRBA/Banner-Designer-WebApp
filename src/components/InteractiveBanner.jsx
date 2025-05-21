import React, { useState } from "react";
import Banner from "./Banner";
import { motion } from "framer-motion";
import { SketchPicker } from "react-color";
import {
    FaUpload,
    FaEyeDropper,
    FaTextHeight,
    FaTools,
    FaShapes,
    FaPlus,
    FaMinus,
    FaTable,
    FaIcons,
    FaHighlighter,
    FaPaintBrush,
    FaGripLines,
    FaSmile,
    FaPen,
    FaEraser,
    FaCog,
    FaChevronDown,
    FaArrowsAlt,
  } from "react-icons/fa";
import BackgroundControls from "./BackgroundControls";
import TextControls from "./TextControls";
import BannerSizeControls from "./BannerSizeControls";
import DrawingToolsControls from "./DrawingToolsControls";
import ElementsControls from "./ElementsControls";
import TableControls from "./TableControls";
import "../App.css";
import "../index.css";

  const InteractiveBanner = () => {
    // Appearance State
    const [background, setBackground] = useState("#ffffff");
    const [text, setText] = useState(
      "I love creating at the intersection of code & creativity ✨\nFashion • Sports • Architecture • Automobiles\nMusic • Poetry • Film • Comics • Aesthetics"
    );
    const [selectedFont, setSelectedFont] = useState("Arial");
    const [textStyle, setTextStyle] = useState("");
    const [textColor, setTextColor] = useState("#000000");

    // Banner Dimensions
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(400);
    const [borderRadius, setBorderRadius] = useState(16);

    // Image Management
    const [uploads, setUploads] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [activeImages, setActiveImages] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState(null);

    // Drawing Tools
    const [drawingTool, setDrawingTool] = useState(null);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [strokeWeight, setStrokeWeight] = useState(5);
    const [strokeTransparency, setStrokeTransparency] = useState(1);

    // UI Controls
    const [showTextOptions, setShowTextOptions] = useState(false);
    const [showToolOptions, setShowToolOptions] = useState(false);
    const [showDrawOptions, setShowDrawOptions] = useState(false);
    const [showElementOptions, setShowElementOptions] = useState(false);
    const [showTableOptions, setShowTableOptions] = useState(false);

    // Table controls state
    const [showAddOptions, setShowAddOptions] = useState(false);
    const [showRemoveOptions, setShowRemoveOptions] = useState(false);

    // Event Handlers
    const handleBackgroundChange = (color) => setBackground(color.hex);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const newUploads = [...uploads, URL.createObjectURL(file)];
          setUploads(newUploads);
          if (currentImageIndex === null) {
            setCurrentImageIndex(0);
            setBackgroundImage(URL.createObjectURL(file));
          }
        }
      };

      const handleTextColorChange = (color) => setTextColor(color.hex);

      const activateEyeDropper = () => {
        if (!window.EyeDropper) {
          alert("Your browser does not support the Eye Dropper API.");
          return;
        }

        const eyeDropper = new window.EyeDropper();
        eyeDropper
          .open()
          .then((result) => setTextColor(result.sRGBHex))
          .catch(console.error);
      };

      const handleRightClick = (index, e) => {
        e.preventDefault();
        if (window.confirm("Delete this image?")) {
          const newUploads = [...uploads];
          newUploads.splice(index, 1);
          setUploads(newUploads);
          if (currentImageIndex === index) {
            setCurrentImageIndex(null);
            setBackgroundImage(null);
          }
        }
      };

      const handleImageDrop = (imageIndex) => {
        setActiveImages([...activeImages, uploads[imageIndex]]);
      };

      const handleImageDelete = (index) => {
        const newActiveImages = [...activeImages];
        newActiveImages.splice(index, 1);
        setActiveImages(newActiveImages);
      };

      return (
    <div className="interactive-container">
      {/* Sidebar Form */}
      <div className="sidebar">
        <h2>DESIGN FORM</h2>

        <BackgroundControls
          background={background}
          handleBackgroundChange={handleBackgroundChange}
          handleFileUpload={handleFileUpload}
          uploads={uploads}
          currentImageIndex={currentImageIndex}
          handleRightClick={handleRightClick}
          setCurrentImageIndex={setCurrentImageIndex}
          setBackgroundImage={setBackgroundImage}
        />

        <TextControls
          text={text}
          setText={setText}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          textStyle={textStyle}
          setTextStyle={setTextStyle}
          textColor={textColor}
          handleTextColorChange={handleTextColorChange}
          activateEyeDropper={activateEyeDropper}
          showTextOptions={showTextOptions}
          setShowTextOptions={setShowTextOptions}
        />

        <BannerSizeControls
          width={width}
          setWidth={setWidth}
          height={height}
          setHeight={setHeight}
          borderRadius={borderRadius}
          setBorderRadius={setBorderRadius}
        />

        <div className="tool-section">
          <label onClick={() => setShowToolOptions(!showToolOptions)}>
            <FaTools /> Tools <FaChevronDown />
          </label>
          {showToolOptions && (
            <div className="dropdown">
              <DrawingToolsControls
                drawingTool={drawingTool}
                setDrawingTool={setDrawingTool}
                strokeColor={strokeColor}
                setStrokeColor={setStrokeColor}
                strokeWeight={strokeWeight}
                setStrokeWeight={setStrokeWeight}
                strokeTransparency={strokeTransparency}
                setStrokeTransparency={setStrokeTransparency}
                showDrawOptions={showDrawOptions}
                setShowDrawOptions={setShowDrawOptions}
              />

              <ElementsControls
                showElementOptions={showElementOptions}
                setShowElementOptions={setShowElementOptions}
              />

              <TableControls
                showTableOptions={showTableOptions}
                setShowTableOptions={setShowTableOptions}
                showAddOptions={showAddOptions}
                setShowAddOptions={setShowAddOptions}
                showRemoveOptions={showRemoveOptions}
                setShowRemoveOptions={setShowRemoveOptions}
              />
            </div>
          )}
        </div>
      </div>

      {/* Banner Display */}
      <div
        className="banner-container"
        style={{ width: "100%", padding: "0 20px" }}
      ></div>

      <Banner
        text={
          text ||
          "I love creating at the intersection of code & creativity ✨\nFashion • Sports • Architecture • Automobiles\nMusic • Poetry • Film • Comics • Aesthetics"
        }
        bgColor={background}
        fontSize={24}
        textColor={textColor}
        backgroundImage={backgroundImage}
        activeImages={activeImages}
        scrollY={0}
        width={width}
        height={height}
        borderRadius={borderRadius}
        selectedFont={selectedFont}
        textStyle={textStyle}
        onImageDrop={handleImageDrop}
        onImageDelete={handleImageDelete}
        drawingTool={drawingTool}
        strokeColor={strokeColor}
        strokeWeight={strokeWeight}
        transparency={strokeTransparency}
      />
    </div>
  );
};

export default InteractiveBanner;