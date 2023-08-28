import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../../../assets/img/image2.png"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../../../../assets/img/image1.png"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
          <Container className="container">
            <Row className="row">
              <Col className="col-lg-8 offset-lg-2" lg="6">
                <div className="carousel">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
      </>
    );
  }
}

export default Carousel;
