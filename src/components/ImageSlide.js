import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ad_1 from "./img/ad_1.png";
import ad_2 from "./img/ad_2.png";

const ImageSlider = () => {
  return (
    <div className="imageSlide">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ad_1} alt="image1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ad_2} alt="image2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default ImageSlider;