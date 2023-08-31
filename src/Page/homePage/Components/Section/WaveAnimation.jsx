import React from "react";

const WaveAnimation = ({ waveTitle }) => {
  const waveShapes = [
    { shapeClass: "shape-one", waveClass: "wave-one" },
    { shapeClass: "shape-two", waveClass: "wave-two" },
    { shapeClass: "shape-three", waveClass: "wave-three" }
  ];

  return (
    <div>
      <div>
        <div className="section-title text-center">{waveTitle}</div>
        <div className="section-title-border mt-3"></div>
      </div>
      <div className="wave-effect wave-anim">
        {waveShapes.map((waveShape, index) => (
          <div key={index} className={`waves-shape ${waveShape.shapeClass}`}>
            <div className={`wave ${waveShape.waveClass}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaveAnimation;

