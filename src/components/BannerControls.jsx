import React from "react";
import { SketchPicker } from "react-color";

export default function BannerControls({
  setText,
  setBgColor,
  setFontSize,
  setImage,
  setWidth,
  setHeight,
  setBorderRadius,
  setSelectedFont,
  setTextStyle,
  setTextColor,
  width,
  height,
  borderRadius,
  fontSize,
}) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-6 bg-white p-4 shadow-md rounded-lg w-full max-w-md">
      {/* Font Selection */}
      <div className="form-group mb-4">
        <label className="block mb-2 font-medium">Font</label>
        <select
          className="w-full p-2 border rounded-lg"
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
      </div>

      {/* Text Style Selection */}
      <div className="form-group mb-4">
        <label className="block mb-2 font-medium">Text Style</label>
        <select
          className="w-full p-2 border rounded-lg"
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
        </select>
      </div>

      {/* Text Color Picker */}
      <div className="form-group mb-4">
        <label className="block mb-2 font-medium">Text Color</label>
        <SketchPicker
          color={setTextColor}
          onChangeComplete={(color) => setTextColor(color.hex)}
        />
      </div>
    </div>
  );
}
