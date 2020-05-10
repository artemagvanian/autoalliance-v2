import React, { Component } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { FirebaseContext } from "../Firebase";
import Footer from "../Footer";

const images = ["about.jpg"];

export class About extends Component {
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
            <h1 className="text-center mt-4 d-block display-1">Autoalliance</h1>
            <p className="lead my-5 text-justify mx-4">
              Компания VVV-Group является разработчиком автомобильных и
              промышленных толщиномеров лакокрасочного покрытия. Мы представлены
              на рынке уже 9 лет и предлагаем своим покупателям максимально
              качественные, удобные и практичные приборы, которые прошли
              тестирование и показали себя как точные толщиномеры. Они с
              легкостью выявят любое повреждение и будут полезны даже самому
              неопытному пользователю!
            </p>
            <img src={this.state.imageUrls[0]} alt="" className="w-100"></img>
            <p className="lead my-5 text-justify mx-4">
              Ценовой ряд представлен толщиномерами от самых недорогих до единиц
              премиум класса. У компании есть большая сеть дилеров по всей
              Украине. Поэтому, понравившуюся модель вы можете купить в своём
              городе, не прибегая к услугам транспортных компаний. На все товары
              действует официальная гарантия. У нас вы всегда можете
              проконсультироваться по любым интересующим вопросам относительно
              товаров. Наши дилеры с радостью вам помогут.
            </p>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
