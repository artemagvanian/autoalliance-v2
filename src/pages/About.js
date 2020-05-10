import React, { Component } from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { FirebaseContext } from "../Firebase";
import Footer from "../Footer";

const images = ["main/stripe.jpg"];

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
              Компания Autoalliance предоставляет ряд комплексных автомобильных
              услуг. Мы занимаемся продажей толщиномеров лакокрасочного
              покрытия, являемся официальным партнером компании VVV-GROUP,
              которая в свою очередь является разработчиком автомобильных и
              промышленных толщиномеров. Автодиагностика, проверка
              лакокрасочного покрытия авто, проверка авто перед покупкой, подбор
              авто под заказ – всё это наши сферы деятельности. Мы сотрудничаем
              с компанией AVTOРИТЕТ – самой крупной компанией по предоставлению
              услуг по подбору авто: продажа, обмен, доставка авто из США. В
              наличии на площадке AVTOРИТЕТ всегда большой выбор авто из США и
              авто Европейского рынка. В сотрудничестве, мы осуществляем
              комплексную проверку юридической чистоты авто.
            </p>
            <img src={this.state.imageUrls[0]} alt="" className="w-100"></img>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
