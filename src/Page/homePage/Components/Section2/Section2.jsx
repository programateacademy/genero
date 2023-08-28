import React, { Component } from "react";
import Carousel2 from "./Carousel2";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation2 from "./WaveAnimation2";
import Container2 from "./Container2";

class Section2 extends Component {
  render() {
    return (
      <div className="section">
        <WaveAnimation2 />
        <Carousel2 />
        <Container2 />
      </div>
    );
  }
}
export default Section2;
