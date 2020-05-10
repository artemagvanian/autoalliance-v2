import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import { FirebaseContext } from "../Firebase";

const images = ["services/6.jpeg", "services/13.jpeg", "services/14.jpeg"];

export class Platform extends Component {
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
              “AVTOРИТЕТ” – комиссионная авто площадка, специализирующаяся на
              продаже автомобилей с пробегом ВСЕХ марок и оказании смежных
              услуг. Мы на рынке авто с пробегом уже несколько лет и являемся
              профессионалами своего дела. Наша главная задача – сделать
              сотрудничество с нами для каждого клиента максимально прозрачным и
              комфортным, ведь мы ценим Ваше время и оказанное нам доверие.
            </p>
            <img src={this.state.imageUrls[0]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              «AVTOРИТЕТ» заботится о своих клиентах на ВСЕХ этапах продажи и
              покупки автомобиля. С еще большим удовольствием мы помогаем людям
              не стать «счастливыми» обладателями двойников, арестованных,
              кредитных и прочих вариаций проблемных машин. На сегодняшний день
              мы рады предложить Вам: - широкий выбор автомобилей с пробегом (мы
              указываем только реальные год выпуска и пробег каждого авто) -
              гарантированная юридическая чистота каждого автомобиля который мы
              предлагаем вашему вниманию - срочный выкуп наличными Вашего авто
              за один час и по очень выгодной цене - обмен Вашего авто на любое
              понравившееся Вам авто на нашей площадке (и не только) с
              возможностью доплаты в обе стороны - страхование авто со скидками
              для Вас при работе с нами - Вы можете оставить на комиссию Ваше
              авто и не тратить свое время и нервы!!! - постановка и снятие
              автомобиля с учёта за 1 час - полная профессиональная
              предпродажная подготовка автомобиля “AVTOРИТЕТ” – комиссионная
              авто площадка, специализирующаяся на продаже автомобилей с
              пробегом ВСЕХ марок и оказании смежных услуг.
            </p>
            <img src={this.state.imageUrls[1]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Cтрахование авто со скидками для Вас при работе с нами. - У нас вы
              можете оформить полис автогражданки (ОСАГО) - У нас вы можете
              оформить полис- Уникальная автогражанка с прямым урегулированием
              (когда виновником ДТП являетесь вы) - У нас мы можете оформить
              КАСКО вашего автомобиля.
            </p>
            <img src={this.state.imageUrls[2]} alt="" className="w-100"></img>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Platform;
