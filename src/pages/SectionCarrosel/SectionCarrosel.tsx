import Carousel from "react-bootstrap/Carousel";
import bg01 from "/bg-carrosel.jpg";
import bg02 from "/bg-carrosel2.jpg";
import bg03 from "/bg-carrosel3.jpg";

import conter from "./SectionCarrosel.module.css";

const SectionCarrosel = () => {
  return (
    <Carousel variant="secondary">
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          style={{ height: "240px" }}
          src={bg01}
          alt={bg01}
        />
        <Carousel.Caption>
          <h2 className={conter.coloCyan}>TI é o Futuro</h2>
          <p>e nós cuidamos do futuro da sua empresa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          style={{ height: "240px" }}
          src={bg02}
          alt={bg02}
        />
        <Carousel.Caption>
          <h2 className={conter.coloCyan}>
            Aqui você vai encontrar a solução que você precisa
          </h2>
          <p>para aprimorar a gestão da sua empresa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`${conter.conterCarrosel} w-100 d-block`}
          style={{ height: "240px" }}
          src={bg03}
          alt={bg03}
        />
        <Carousel.Caption>
          <h2 className={conter.coloCyan}>H-Blog</h2>
          <p>Um canal de noticias que você pode acompanhar</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SectionCarrosel;
