import React, { Component } from "react";
import Carousel from "../Section/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "../Section/WaveAnimation";
import Container2 from "./Container2";

class Section2 extends Component {
  render() {
    return (
      <div className="section">
        <WaveAnimation waveTitle="Oleada 2" />
        <Carousel />
        <Container2 />
      </div>
    );
  }
}
export default Section2;
