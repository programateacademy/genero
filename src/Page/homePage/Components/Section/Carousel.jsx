import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../../../assets/img/fem1.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../../../../assets/img/fem2.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("../../../../assets/img/fem3.jpg"),
    altText: "",
    caption: "",
    header: "",
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
          <Container className="container" id='gallery'>
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
