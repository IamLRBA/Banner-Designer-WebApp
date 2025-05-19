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

            {/* Background Upload */}
            <div className="tool-section">
              <label>
                <FaUpload /> Background
              </label>
              <input type="file" onChange={handleFileUpload} />
              <SketchPicker
                color={background}
                onChangeComplete={handleBackgroundChange}
              />
            </div>

            {/* Uploaded Files */}
            <div className="tool-section">
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

            {/* Text Customization */}
            <div className="tool-section">
              <label onClick={() => setShowTextOptions(!showTextOptions)}>
                <FaTextHeight /> Text <FaChevronDown />
              </label>
              {showTextOptions && (
                <div className="dropdown">
                  {/* Text Input */}
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

                  {/* Font Style Selector */}
              <label
                htmlFor="font-style"
                className="block text-sm font-medium text-gray-700"
              >
                Font Style
              </label>
              <select
                value={selectedFont}
                onChange={(e) => setSelectedFont(e.target.value)}
              >
                <option value="Abril Fatface">Abril Fatface</option>
                <option value="Anton">Anton</option>
                <option value="Arial">Arial</option>
                <option value="Arial Black">Arial Black</option>
                <option value="Book Antiqua">Book Antiqua</option>
                <option value="Bebas Neue">Bebas Neue</option>
                <option value="Cairo">Cairo</option>
                <option value="Caveat">Caveat</option>
                <option value="Century Gothic">Century Gothic</option>
                <option value="Cinzel">Cinzel</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Consolas">Consolas</option>
                <option value="Courier">Courier</option>
                <option value="Courier New">Courier New</option>
                <option value="Dancing Script">Dancing Script</option>
                <option value="Droid Sans">Droid Sans</option>
                <option value="Frank Ruhl Libre">Frank Ruhl Libre</option>
                <option value="Georgia">Georgia</option>
                <option value="Great Vibes">Great Vibes</option>
                <option value="Impact">Impact</option>
                <option value="Indie Flower">Indie Flower</option>
                <option value="Josefin Sans">Josefin Sans</option>
                <option value="Lato">Lato</option>
                <option value="Lobster">Lobster</option>
                <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                <option value="Lora">Lora</option>
                <option value="Merriweather">Merriweather</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Nunito">Nunito</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Oswald">Oswald</option>
                <option value="Pacifico">Pacifico</option>
                <option value="Palatino Linotype">Palatino Linotype</option>
                <option value="Playfair Display">Playfair Display</option>
                <option value="Poppins">Poppins</option>
                <option value="Quicksand">Quicksand</option>
                <option value="Raleway">Raleway</option>
                <option value="Roboto">Roboto</option>
                <option value="Roboto Slab">Roboto Slab</option>
                <option value="Righteous">Righteous</option>
                <option value="Slabo 27px">Slabo 27px</option>
                <option value="Source Sans Pro">Source Sans Pro</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Ubuntu">Ubuntu</option>
                <option value="Verdana">Verdana</option>
                <option value="Zilla Slab">Zilla Slab</option>
              </select>

              {/* Text Style Selector */}
              <label
                htmlFor="text-style"
                className="block text-sm font-medium text-gray-700"
              >
                Text Style
              </label>
              <select
                value={textStyle}
                onChange={(e) => setTextStyle(e.target.value)}
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="italic">Italic</option>
                <option value="underline">Underline</option>
                <option value="strikethrough">Strikethrough</option>
                <option value="uppercase">Uppercase</option>
                <option value="lowercase">Lowercase</option>
                <option value="capitalize">Capitalize</option>
                <option value="oblique">Oblique</option>
                <option value="lighter">Lighter</option>
                <option value="bolder">Bolder</option>
                <option value="initial">Initial</option>
                <option value="inherit">Inherit</option>
              </select>

              {/* Text Color Picker Dropdown */}
              <div className="color-picker-container">
                <label className="block mb-2 font-medium">Text Color</label>
                <div className="flex items-center gap-2">
                  <SketchPicker
                    color={textColor}
                    onChangeComplete={handleTextColorChange}
                    presetColors={[
                      "#000000",
                      "#FFFFFF",
                      "#FF0000",
                      "#00FF00",
                      "#0000FF",
                      "#FFFF00",
                      "#FF00FF",
                      "#00FFFF",
                      "#FFA500",
                      "#800080",
                      "#A52A2A",
                      "#808080",
                      "#101010",
                      "#FF4500",
                      "#9400D3",
                      "#4B0082",
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

        {/* Banner Size Control section */}
        <div className="tool-section">
          <label>
            <FaArrowsAlt /> Banner Size
          </label>

          {/* Width Control */}
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
              <button
                onClick={() => setWidth((prev) => Math.max(100, prev - 50))}
              >
                <FaMinus />
              </button>
              <button onClick={() => setWidth((prev) => prev + 50)}>
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Height Control */}
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
              <button
                onClick={() => setHeight((prev) => Math.max(50, prev - 50))}
              >
                <FaMinus />
              </button>
              <button onClick={() => setHeight((prev) => prev + 50)}>
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Border Radius Control */}
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
              <button
                onClick={() => setBorderRadius((prev) => Math.max(0, prev - 5))}
              >
                <FaMinus />
              </button>
              <button onClick={() => setBorderRadius((prev) => prev + 5)}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tool-section">
          <label onClick={() => setShowToolOptions(!showToolOptions)}>
            <FaTools /> Tools <FaChevronDown />
          </label>
          {showToolOptions && (
            <div className="dropdown">
              {/* Drawing Tools */}
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
                      onChange={(e) =>
                        setStrokeWeight(parseInt(e.target.value))
                      }
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
                      onChange={(e) =>
                        setStrokeTransparency(parseFloat(e.target.value))
                      }
                    />
                  </div>

                  <button
                    onClick={() => {
                      const canvas = document.querySelector("canvas");
                      canvas
                        ?.getContext("2d")
                        .clearRect(0, 0, canvas.width, canvas.height);
                    }}
                    className="mt-2 p-2 bg-red-100 rounded"
                  >
                    Clear Drawings
                  </button>
                </div>
              )}

              {/* Elements */}
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

              {/* Table Options */}
              <label onClick={() => setShowTableOptions(!showTableOptions)}>
                Table <FaChevronDown />
              </label>
              {showTableOptions && (
                <div className="dropdown">
                  <div className="tooltip-container">
                    <button className="table-btn">
                      <FaTable />
                    </button>
                    <span className="tooltip">Create</span>
                  </div>
                  <div className="dropdown-container">
                    <div className="tooltip-container">
                      <button
                        className="table-btn"
                        onClick={() => setShowAddOptions(!showAddOptions)}
                      >
                        <FaPlus />
                      </button>
                      <span className="tooltip">Add</span>
                    </div>
                    {showAddOptions && (
                      <div className="sub-dropdown">
                        <button>Add Row</button>
                        <button>Add Column</button>
                      </div>
                    )}
                  </div>
                  <div className="dropdown-container">
                    <div className="tooltip-container">
                      <button
                        className="table-btn"
                        onClick={() => setShowRemoveOptions(!showRemoveOptions)}
                      >
                        <FaMinus />
                      </button>
                      <span className="tooltip">Remove</span>
                    </div>
                    {showRemoveOptions && (
                      <div className="sub-dropdown">
                        <button>Remove Row</button>
                        <button>Remove Column</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
