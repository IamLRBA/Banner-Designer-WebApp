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