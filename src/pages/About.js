import React from "react";
import { Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Stripe from "../../assets/index/1.jpg";

const About = () => (
  <div>
    <Header />
    <Container>
      <div className="my-4 bg-secondary p-3 rounded" style={{ color: "white" }}>
        <h1 className="text-center mt-4 d-block display-1">Autoalliance</h1>
        <p className="lead my-5 text-justify mx-4">
          Компания Autoalliance предоставляет ряд комплексных автомобильных
          услуг. Мы занимаемся продажей толщиномеров лакокрасочного покрытия,
          являемся официальным партнером компании VVV-GROUP, которая в свою
          очередь является разработчиком автомобильных и промышленных
          толщиномеров. Автодиагностика, проверка лакокрасочного покрытия авто,
          проверка авто перед покупкой, подбор авто под заказ – всё это наши
          сферы деятельности. Мы сотрудничаем с компанией AVTOРИТЕТ – самой
          крупной компанией по предоставлению услуг по подбору авто: продажа,
          обмен, доставка авто из США. В наличии на площадке AVTOРИТЕТ всегда
          большой выбор авто из США и авто Европейского рынка. В сотрудничестве,
          мы осуществляем комплексную проверку юридической чистоты авто.
        </p>
        <img src={Stripe} alt="" className="w-100"></img>
      </div>
    </Container>
    <Footer />
  </div>
);

export default About;
