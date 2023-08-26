import React, { Component } from "react";
import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "./WaveAnimation";
import Container from "./Container";

class Section extends Component {
  render() {
    return (
      <div className="section">
        <WaveAnimation />
        <Carousel />
        <Container />
      </div>
    );
  }
}
export default Section;