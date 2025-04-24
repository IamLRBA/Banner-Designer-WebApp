import React, { useState } from "react";

const DraggableImage = ({ src, onDelete }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - e.target.offsetWidth / 2,
        y: e.clientY - e.target.offsetHeight / 2,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", handleResizeEnd);
  };

  const handleResize = (e) => {
    if (isResizing) {
      setSize({
        width: Math.max(50, e.clientX - position.x),
        height: Math.max(50, e.clientY - position.y),
      });
    }
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleResizeEnd);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <div
      className="draggable-image"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: 20,
      }}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
    >
      <img
        src={src}
        alt="Banner element"
        className="w-full h-full object-cover"
        draggable="false"
      />
      <div className="resize-handle" onMouseDown={handleResizeStart} />
    </div>
  );
};

export default DraggableImage;
