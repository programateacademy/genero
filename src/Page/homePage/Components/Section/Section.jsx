import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "../Section/WaveAnimation";
import Container from "./Container";
import Carousel from "./Carousel";

class Section extends Component {
  render() {
    return (
      <>
        <WaveAnimation waveTitle="OLEADA 1" />
        <div className="section">
        <Carousel/>
        <Container/>
      </div>
      </>
    );
  }
}
export default Section;