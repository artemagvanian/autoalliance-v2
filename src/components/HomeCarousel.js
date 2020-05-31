import React from "react";
import { Carousel, Container } from "react-bootstrap";

import Carousel1 from "../../assets/carousel/1.jpeg";
import Carousel2 from "../../assets/carousel/2.jpeg";
import Carousel3 from "../../assets/carousel/3.jpeg";
import Carousel4 from "../../assets/carousel/4.jpeg";
import Carousel5 from "../../assets/carousel/5.jpeg";
import Carousel6 from "../../assets/carousel/6.jpeg";
import Carousel7 from "../../assets/carousel/7.jpeg";
import Carousel8 from "../../assets/carousel/8.jpeg";

const HomeCarousel = () => {
  const images = [
    { url: Carousel1, caption: "Автодиагностика" },
    {
      url: Carousel2,
      caption: "Программирование блоков управления",
    },
    { url: Carousel3, caption: "Длинное кодирование" },
    { url: Carousel4, caption: "Автоплощадка" },
    { url: Carousel5, caption: "Авто из США" },
    { url: Carousel6, caption: "Подбор авто под ключ" },
    { url: Carousel7, caption: "Автострахование" },
    { url: Carousel8, caption: "" },
  ];

  return (
    <Container className="mt-4">
      <Carousel>
        {images.map((d, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={d.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{d.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
