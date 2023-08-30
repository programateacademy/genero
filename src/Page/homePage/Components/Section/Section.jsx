import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WaveAnimation from "./WaveAnimation";
import Container from "./Container";
import Carousel from "./Carousel";

class Section extends Component {
images = [
    'https://images.hola.com/imagenes/mascotas/20210217184541/gatos-gestos-lenguaje-significado/0-922-380/gatos-gestos-m.jpg?tx=w_680',
    'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001',
  ];
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