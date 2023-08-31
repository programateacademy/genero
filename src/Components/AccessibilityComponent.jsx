import React, { useState } from "react";

const AccessibilityComponent = () => {
  const backgroundColors = ["lightgray", "darkgray","white"];
  const textColors = ["black", "darkgray", "gray"];
  const fontSizes = ["16px", "18px", "20px"];

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [fontSizeIndex, setFontSizeIndex] = useState(0);

  const handleBackgroundChange = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % 3);
    document.body.style.backgroundColor = backgroundColors[backgroundIndex];
  };

  const handleTextColorChange = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % 3);
    document.body.style.color = textColors[textIndex];
  };

  const handleFontSizeChange = () => {
    setFontSizeIndex((prevIndex) => (prevIndex + 1) % 3);
    document.body.style.fontSize = fontSizes[fontSizeIndex];
  };

  return (
    <div id="menu-accessibility">
      <button onClick={handleBackgroundChange}>Cambiar Fondo</button>
      <button onClick={handleTextColorChange}>Cambiar Color de Texto</button>
      <button onClick={handleFontSizeChange}>Cambiar Tamaño de Fuente</button>
    </div>
  );
};

export default AccessibilityComponent;





