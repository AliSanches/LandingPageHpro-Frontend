import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "/bg-carrosel.jpg";

import conter from "./SectionCarrosel.module.css";

const SectionCarrosel = () => {
  return (
    <Carousel variant="secondary">
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          src={ExampleCarouselImage}
          alt={ExampleCarouselImage}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          src={ExampleCarouselImage}
          alt={ExampleCarouselImage}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          src={ExampleCarouselImage}
          alt={ExampleCarouselImage}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SectionCarrosel;
