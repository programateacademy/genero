import React from "react";

const WaveAnimation = ({ waveTitle }) => {
  return (
    <div>
      <div>
        <div class="section-title text-center">OLEADA 1</div>
        <div class="section-title-border mt-3"></div>
      </div>
      <div class="wave-effect wave-anim">
        <div class="waves-shape shape-one">
          <div class="wave wave-one"></div>
        </div>
        <div class="waves-shape shape-two">
          <div class="wave wave-two"></div>
        </div>
        <div class="waves-shape shape-three">
          <div class="wave wave-three"></div>
        </div>
      </div>
    </div>
  );
};
export default WaveAnimation;
