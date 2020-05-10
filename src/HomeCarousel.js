import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { FirebaseContext } from "./Firebase";

class HomeCarousel extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { url: "services/1.jpeg", caption: "Автодиагностика" },
        {
          url: "services/4.jpeg",
          caption: "Программирование блоков управления",
        },
        { url: "services/3.jpeg", caption: "Длинное кодирование" },
        { url: "services/6.jpeg", caption: "Автоплощадка" },
        { url: "services/7.jpeg", caption: "Авто из США" },
        { url: "services/8.jpeg", caption: "Подбор авто под ключ" },
        { url: "services/9.jpeg", caption: "Автострахование" },
        { url: "services/10.jpeg", caption: "" },
      ],
    };
  }
  async componentDidMount() {
    let firebase = this.context;
    for (let i = 0; i < this.state.images.length; i++) {
      const url = await firebase.storage
        .ref(this.state.images[i].url)
        .getDownloadURL();
      console.log(url);
      this.state.images[i].url = url;
      //TODO: rewrite
      this.setState({});
    }
  }
  render() {
    return (
      <Container className="mt-4">
        <Carousel>
          {this.state.images.map((d, i) => (
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
  }
}

export default HomeCarousel;
