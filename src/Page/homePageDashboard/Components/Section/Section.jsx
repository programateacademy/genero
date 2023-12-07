import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "./WaveAnimation";
import Container from "./Container";

class Section extends Component {
  render() {
    return (
      <>
        <WaveAnimation />
        <div className="section">
        <Container/>
      </div>
      </>
    );
  }
}
export default Section;