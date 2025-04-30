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
