import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "./WaveAnimation";
import Container from "./Container";
import Carousel from "./Carousel";

class Section extends Component {
  render() {
    return (
      <>
        <WaveAnimation waveTitle="Oleada 1" />
        <div className="section">
        <Carousel/>
        <Container/>
      </div>
      </>
    );
  }
}
export default Section;