import React, { Component } from "react";
import {
  Container,
  Card,
  CardGroup,
  Button,
  Image,
  CardDeck,
} from "react-bootstrap";
import { FirebaseContext } from "./Firebase";
import { Link } from "@reach/router";

export class BigNavigation extends Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "main/stripe.jpg",
        "thumb_tg-8828-plus-1.jpg",
        "services/thumb_9.jpeg",
        "services/thumb_12.jpeg",
        "partners/thumb_cert.jpeg",
        "services/thumb_11.jpeg",
        "partners/thumb_caucasus.jpg",
        "partners/thumb_avtoritet.jpeg",
        "partners/thumb_vvv.png",
        "partners/thumb_metallic.jpg",
        "partners/thumb_broker.jpeg",
        "partners/thumb_klyuch.jpg",
        "partners/thumb_mariupolavto.jpeg",
      ],
    };
  }
  async componentDidMount() {
    let firebase = this.context;
    for (let i = 0; i < this.state.images.length; i++) {
      const url = await firebase.storage
        .ref(this.state.images[i])
        .getDownloadURL();
      this.state.images[i] = url;
      //TODO: rewrite
      this.setState({});
    }
  }
  render() {
    return (
      <Container className="my-5">
        <Image src={this.state.images[0]} fluid alt="" />
        <h1 className="my-5 text-center">Комплексные автоуслуги Мариуполя</h1>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={this.state.images[1]} alt="" />
            <Card.Body>
              <Card.Title>Толщиномеры</Card.Title>
              <Card.Text>
                Наша компания является официальным партнёром компании VVV-Group,
                которая, в свою очередь, является разработчиком автомобильных и
                промышленных толщиномеров лакокрасочного покрытия.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/goods"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[2]} alt="" />
            <Card.Body>
              <Card.Title>Автодиагностика</Card.Title>
              <Card.Text>
                Считывание показаний с различных систем транспортного средства.
                Удаление пассивных ошибок и проверка активных, чтобы узнать о
                поломках которые необходимо устранить.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/services"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[3]} alt="" />
            <Card.Body>
              <Card.Title>Проверка авто перед покупкой</Card.Title>
              <Card.Text>
                Манипуляции с пробегом могут увеличить расходы на средний
                семейный автомобиль, а также могут скрывать серьезные
                механические проблемы. Мы предоставим Вам полный отчет о
                подержанном авто.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/services"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[4]} alt="" />
            <Card.Body>
              <Card.Title>Сертификация</Card.Title>
              <Card.Text>Помощь в прохождении сертификации авто</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/platform"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[5]} alt="" />
            <Card.Body>
              <Card.Title>Доставка авто</Card.Title>
              <Card.Text>
                Помощь в доставке автомобилей из порта Одессы и Южного
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={"/platform"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        </CardGroup>
        <h1 className="my-5 text-center">Наши партнёры</h1>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={this.state.images[6]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">
                Caucasus Auto Import
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[7]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">Avtoритет</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[8]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">VVV-Group</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck className="mt-4">
          <Card>
            <Card.Img variant="top" src={this.state.images[9]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">
                Metallic Auto Garage
              </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[10]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">Брокерские услуги</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[11]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">Ключ-сервис</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={this.state.images[12]} alt="" />
            <Card.Body>
              <Card.Title className="text-center">Мариуполь-Авто</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default BigNavigation;
