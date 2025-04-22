import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DraggableImage from "./DraggableImage";

export default function Banner({
  text,
  bgColor,
  fontSize,
  backgroundImage,
  activeImages,
  width,
  height,
  borderRadius,
  selectedFont,
  textStyle,
  textColor,
  onImageDrop,
  onImageDelete,
  drawingTool,
  strokeColor,
  strokeWeight,
  transparency,
}) {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const handleDrop = (e) => {
    e.preventDefault();
    const imageIndex = e.dataTransfer.getData("imageIndex");
    onImageDrop && onImageDrop(imageIndex);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Initialize canvas size
  useEffect(() => {
    setCanvasSize({ width, height });
  }, [width, height]);

  // Setup canvas and drawing context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, [width, height, drawingTool]);

  const startDrawing = (e) => {
    if (!drawingTool) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);

    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (drawingTool) {
      case "pen":
        ctx.globalAlpha = transparency;
        ctx.lineWidth = strokeWeight;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = strokeColor;
        break;
      case "marker":
        ctx.globalAlpha = transparency * 0.7;
        ctx.lineWidth = strokeWeight * 1.5;
        ctx.lineCap = "square";
        ctx.lineJoin = "bevel";
        ctx.strokeStyle = strokeColor;
        break;
      case "brush":
        ctx.globalAlpha = transparency * 0.8;
        ctx.lineWidth = strokeWeight * 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = strokeColor;
        break;
      case "eraser":
        ctx.globalAlpha = 1;
        ctx.lineWidth = strokeWeight * 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = bgColor;
        break;
    }
  };

  const draw = (e) => {
    if (!isDrawing || !drawingTool) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <motion.div
      className="flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden mx-auto"
      style={{
        backgroundColor: bgColor,
        width: width === "full" ? "100%" : `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        margin: "20px 0",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Banner Background"
          className="absolute w-full h-full object-cover opacity-50"
          style={{ borderRadius: `${borderRadius}px` }}
        />
      )}

      {/* Drawing Canvas */}
      {drawingTool && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 z-20"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            cursor:
              drawingTool === "eraser"
                ? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='8' fill='white'/><circle cx='8' cy='8' r='6' fill='${encodeURIComponent(
                    bgColor
                  )}'/></svg>") 8 8, auto`
                : `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><circle cx='8' cy='8' r='8' fill='${encodeURIComponent(
                    drawingTool === "eraser" ? bgColor : strokeColor
                  )}'/></svg>") 8 8, auto`,
          }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      )}

      {/* Draggable Images */}
      {activeImages.map((img, index) => (
        <DraggableImage
          key={index}
          src={img}
          onDelete={() => onImageDelete(index)}
        />
      ))}

      {/* Text Content */}
      <span
        className="relative z-30 px-4 whitespace-pre-line"
        style={{
          fontSize: `${fontSize}px`,
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
          color: textColor,
        }}
      >
        {text ||
          "I love creating at the intersection of code & creativity ✨\nFashion • Sports • Architecture • Automobiles\nMusic • Poetry • Film • Comics • Aesthetics"}
      </span>
    </motion.div>
  );
}
