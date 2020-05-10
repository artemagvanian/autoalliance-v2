import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";

export class Platform extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <div
            className="my-4 bg-secondary p-3 rounded"
            style={{ color: "white" }}
          >
            <h1 className="text-center mt-4 d-block display-1">
              Автоплощадка Avtoритет
            </h1>
            <p className="lead my-5 text-justify mx-4">
              Компания AVTOРИТЕТ предоставит Вам абсолютно бесплатную
              профессиональную консультацию и подбор авто на аукционе, а также
              лучшие цены на логистику и самую низкую комиссию!
            </p>
            <p className="lead my-5 text-justify mx-4">
              Ниже рассказываем о всех этапах:
            </p>
            <ol>
              <li>Заключение договора о покупке авто из США</li>
              <li>
                Поиск автомобиля по заданным Вами характеристикам на аукционах в
                США
              </li>
              <li>Торги за автомобиль на аукционе</li>

              <li>Организация логистики по США в порт погрузки.</li>
              <li>Контроль доставки по США на каждом этапе</li>

              <li>Организация морской доставки автомобиля.</li>

              <li>Прохождение таможенного контроля в порту выгрузки</li>
              <li>Доставка в Мариуполь (или другой город)</li>
              <li>Ремонт автомобиля </li>
              <li>Сертификация</li>
              <li>Постановка на учёт</li>
            </ol>
            <p className="lead my-5 text-justify mx-4">
              По любым вопросам звоните 0962196581 или 0992561717 Денис
              Витальевич.
            </p>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Platform;
