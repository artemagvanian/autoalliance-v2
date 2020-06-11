import React from "react";
import { Container } from "react-bootstrap";

import Services1 from "../../assets/services/1.jpeg";
import Services2 from "../../assets/services/2.jpeg";
import Services3 from "../../assets/services/3.jpeg";
import Services4 from "../../assets/services/4.jpeg";
import Services5 from "../../assets/services/5.jpeg";

import SEO from "../components/SEO";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => (
  <>
    <SEO title="Услуги" />
    <Header />
    <Container>
      <div className="my-4 bg-secondary p-4 rounded" style={{ color: "white" }}>
        <h1 className="display-1 text-center mt-4">Autoalliance</h1>
        <p className="lead my-5 text-justify">
          Считывание показаний с различных систем транспортного средства.
          Удаление пассивных ошибок и проверка активных, чтобы узнать о поломках
          которые необходимо устранить. Автоматическая идентификация автомобиля.
          Сканирование всех систем и анализ. Проверка оригинального пробега во
          всех блоках. Анализ батареи автомобиля. Полный журнал диагностики с
          отправкой на электронную почту.
        </p>
        <img src={Services1} alt="" className="w-100"></img>
        <p className="lead my-5 text-justify">
          Проверка степени износа автомобильных АКБ, тестирование работы
          стартера и генератора. Распечатка результатов диагностики АКБ.
        </p>
        <img src={Services2} alt="" className="w-100"></img>
        <p className="lead my-5 text-justify">
          Манипуляции с пробегом могут увеличить расходы на средний семейный
          автомобиль, а также могут скрывать серьезные механические проблемы. Мы
          работаем с автомобилями BMW, Mercedes, VAG группа, Toyota, Renault. Мы
          предоставим Вам полный отчет о подержанном авто: Подробная информация
          о идентификационных номерах авто. Каждое транспортное средство имеет
          уникальный идентификационный номер который сохранен в разных блоках
          управления .Мы проверяем являются ли значения подлинными. Пробег
          записывается в различных блоках управления. Мы считываем и сравниваем
          эти значения чтобы идентифицировать любое вмешательство. Подробности о
          записях автосервиса. Транспортные средства сохраняют сервисную
          информацию,включая пробег, значения и время , когда была выполнена
          сервисная услуга. Предоставляем полный журнал диагностики с отправкой
          на электронную почту.
        </p>
        <img src={Services3} alt="" className="w-100"></img>
        <p className="lead my-5 text-justify">
          Замена единиц измерения на американских авто (автомобили Volkswagen).
          Мили в километры, фаренгейты в цельсий и т.д. Кодирование,
          програмирование. Подключение функций комфорта. История подключения
          автомобилей.
        </p>
        <img src={Services4} alt="" className="w-100"></img>
        <p className="lead my-5 text-justify">
          Проверка юридической чистоты авто, автострахование
        </p>
        <img src={Services5} alt="" className="w-100"></img>
      </div>
    </Container>
    <Footer />
  </>
);

export default Services;
