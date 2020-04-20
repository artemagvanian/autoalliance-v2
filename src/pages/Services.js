import React, { Component } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { FirebaseContext } from "../Firebase";

const images = [
  "services/1.jpeg",
  "services/2.jpeg",
  "services/3.jpeg",
  "services/4.jpeg",
  "services/5.jpeg",
];

export class Services extends Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { imageUrls: [] };
  }
  async componentDidMount() {
    let firebase = this.context;
    let imageUrls = [];
    for (const i of images) {
      const url = await firebase.storage.ref(i).getDownloadURL();
      imageUrls.push(url);
    }
    this.setState({ imageUrls });
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <div
            className="my-4 bg-secondary p-3 rounded"
            style={{ color: "white" }}
          >
            <h1 className="display-1 text-center mt-4">Autoalliance</h1>
            <p className="lead my-5 text-justify mx-4">
              Считывание показаний с различных систем транспортного средства.
              Удаление пассивных ошибок и проверка активных, чтобы узнать о
              поломках которые необходимо устранить. Автоматическая
              идентификация автомобиля . Сканирование всех систем и анализ.
              Проверка оригинального пробега во всех блоках. Анализ батареи
              автомобиля . Полный журнал диагностики с отправкой на электронную
              почту.
            </p>
            <img src={this.state.imageUrls[0]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Проверка степени износа автомобильных АКБ , тестирование работы
              стартера и генератора. Распечатка результатов диагностики АКБ.
            </p>
            <img src={this.state.imageUrls[1]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Манипуляции с пробегом могут увеличить расходы на средний семейный
              автомобиль, а также могут скрывать серьезные механические
              проблемы. Мы работаем с автомобилями Bmw, Mercedes,Vag группа ,
              Toyota, Renault... Мы предоставим Вам полный отчет о подержанном
              авто: Подробная информация о идентификационных номерах авто.
              Каждое транспортное средство имеет уникальный идентификационный
              номер который сохранен в разных блоках управления .Мы проверяем
              являются ли значения подлинными. Пробег записывается в различных
              блоках управления . Мы считываем и сравниваем эти значения чтобы
              идентифицировать любое вмешательство. Подробности о записях
              автосервиса. Транспортные средства сохраняют сервисную
              информацию,включая пробег, значения и время , когда была выполнена
              сервисная услуга . Предоставляем полный журнал диагностики с
              отправкой на электронную почту.
            </p>
            <img src={this.state.imageUrls[2]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Замена единиц измерения на американских авто (автомобили
              Volkswagen). Мили в километры, фаренгейты в цельсий и т.д.
              Кодирование, програмирование. Подключение функций комфорта.
              История подключения автомобилей.
            </p>
            <img src={this.state.imageUrls[3]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Проверка юридической чистоты авто
            </p>
            <img src={this.state.imageUrls[4]} alt="" className="w-100"></img>
          </div>
        </Container>
      </div>
    );
  }
}

export default Services;
