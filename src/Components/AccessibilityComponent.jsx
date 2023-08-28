import React, { useState } from "react";

const AccessibilityComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [fontSize, setFontSize] = useState("");

  const handleBackgroundColorChange = (event) => {
    document.body.style.backgroundColor = event.target.value;
    setBackgroundColor(event.target.value);
  };

  const handleTextColorChange = (event) => {
    document.body.style.color = event.target.value;
    setTextColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    document.body.style.fontSize = event.target.value;
    setFontSize(event.target.value);
  };

  const colorOptions = [
    { value: "", label: "Seleccione un color" },
    { value: "white", label: "Blanco" },
    { value: "lightgray", label: "Gris Claro" },
    { value: "darkgray", label: "Gris" }
  ];

  const textColorOptions = [
    { value: "", label: "Seleccione un color" },
    { value: "black", label: "Negro" },
    { value: "white", label: "Blanco" },
    { value: "gray", label: "Gris Medio" }
  ];

  const fontSizeOptions = [
    { value: "", label: "Seleccione un tamaño" },
    { value: "16px", label: "Normal" },
    { value: "18px", label: "Grande" },
    { value: "20px", label: "Muy Grande" }
  ];

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <div className="Container_Accessibility">
      <h1>Accesibilidad</h1>
      <label>
        Color de Fondo:
        <select value={backgroundColor} onChange={handleBackgroundColorChange}>
          {renderOptions(colorOptions)}
        </select>
      </label>
      <br />
      <label>
        Color de Texto:
        <select value={textColor} onChange={handleTextColorChange}>
          {renderOptions(textColorOptions)}
        </select>
      </label>
      <br />
      <label>
        Tamaño de Texto:
        <select value={fontSize} onChange={handleFontSizeChange}>
          {renderOptions(fontSizeOptions)}
        </select>
      </label>
      <p>
        Esta sección te permite modificar el tamaño y el color de la página y los textos.
      </p>
    </div>
  );
};

export default AccessibilityComponent;


