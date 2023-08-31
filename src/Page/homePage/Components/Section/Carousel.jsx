import React from "react";

// reactstrap components
import { UncontrolledCarousel } from "reactstrap";

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
                <div className="carousel">
                  <UncontrolledCarousel items={items} />
                </div>
      </>
    );
  }
}

export default Carousel;
