import React from "react";


const WaveAnimation = ({waveTitle}) => {
  return (
<>
<div className="section-title text-center">{waveTitle}</div>
  <div className="wave-effect wave-anim">
  {["one", "two", "three"].map((shapeClass) => (
    <div key={shapeClass} className={`waves-shape shape-${shapeClass}`}>
      <div className={`wave wave-${shapeClass}`}></div>
    </div>
  ))}
  </div>
</>

  );
};
export default WaveAnimation;
