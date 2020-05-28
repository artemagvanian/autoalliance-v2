import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { FirebaseContext } from "../Firebase";

const images = [
  "partners/thumb_caucasus.jpg",
  "partners/thumb_avtoritet.jpeg",
  "partners/thumb_vvv.png",
  "partners/thumb_metallic.jpg",
  "partners/thumb_broker.jpeg",
  "partners/thumb_klyuch.jpg",
  "partners/thumb_mariupolavto.jpeg",
];

export default class Partners extends React.Component {
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
          <Card className="my-4" id="caucasus">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[0]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Caucasus Auto Import</Card.Title>
                  <Card.Text>
                    Caucasus Auto Import - является авторизованным
                    представителем Copart в Грузии, Азербайджане, Армении,
                    Кыргызской Республике, Северном Кавказе, а теперь и в
                    Украине. Caucasus Auto Import предлагает дилерам,
                    организациям и частным лицам приобретение автомобилей на
                    рынке Америки. За весь период компания импортировала и
                    осуществила реализацию более 160.000 автомобилей. Caucasus
                    Auto Import поможет вам приобрести автомобиль под заказ с
                    последующей доставкой и растаможкой автомобиля в Украине.
                    <Button
                      block
                      className="my-4"
                      href="//caucasusauto.com"
                      target="_blank"
                    >
                      Перейти на сайт партнёра
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="avtoritet">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[1]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Демонстрационная площадка AVTOРИТЕТ</Card.Title>
                  <Card.Text>
                    “AVTOРИТЕТ” – комиссионная авто площадка, специализирующаяся
                    на продаже автомобилей с пробегом ВСЕХ марок и оказании
                    смежных услуг. Мы на рынке авто с пробегом уже несколько лет
                    и являемся профессионалами своего дела. Наша главная задача
                    – сделать сотрудничество с нами для каждого клиента
                    максимально прозрачным и комфортным, ведь мы ценим Ваше
                    время и оказанное нам доверие.
                    <Button
                      block
                      className="my-4"
                      href="//www.facebook.com/groups/1425994204113603"
                      target="_blank"
                    >
                      Перейти на сайт партнёра
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="vvv-group">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[2]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>VVV-Group</Card.Title>
                  <Card.Text>
                    Компания VVV-Group была основана в 2000 году, и в настоящее
                    время является ведущим производителем измерительного
                    оборудования. Мы производим высокоточные и стабильные
                    приборы, использовать которые можно в любой сфере –
                    промышленности, крупносерийном производстве, страховой
                    деятельности и т.д. Но самую большую популярность толщиномер
                    лакокрасочных покрытий обрел в автомобильной отрасли. Их
                    используют для проверки автомобилей на предмет скрытых
                    повреждений, проведений кузовных работ.
                    <Button
                      block
                      className="my-4"
                      href="//vvv-group.com"
                      target="_blank"
                    >
                      Перейти на сайт партнёра
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="metallic">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[3]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Metallic Auto Garage</Card.Title>
                  <Card.Text>
                    Покраска. Рихтовка. Подбор краски. Полировка. Химчистка.
                    <Button
                      block
                      className="my-4"
                      href="//www.facebook.com/groups/1295134013868338"
                      target="_blank"
                    >
                      Перейти на сайт партнёра
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="broker">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[4]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Брокерские услуги</Card.Title>
                  <Card.Text>
                    Растаможка авто из Европы. Полный комплекс услуг по
                    растаможке авто.
                    <Button
                      block
                      className="my-4"
                      href="tel:+380672081129"
                      target="_blank"
                    >
                      +380672081129
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="klyuch">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[5]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Ключ-сервис</Card.Title>
                  <Card.Text>
                    Автомобильные ключи с чипом. Чипы для автозапуска
                    автомобиля. Ремонт автозамков и ключей. Восстановление
                    ключей при полной утеря. Замена кнопок на пульте управления.
                    Квартирные ключи любой сложности. Ключи для домофона.
                    Изготовление ключей для сейфов и гаражей.
                    <Button
                      block
                      className="my-4"
                      href="tel:+380977005566"
                      target="_blank"
                    >
                      +380977005566
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="my-4" id="mariupol-avto">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img src={this.state.imageUrls[6]} alt="" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Мариуполь-Авто</Card.Title>
                  <Card.Text>
                    Автозапчасти. Масла. Фильтры. Кузовные запчасти.
                    <Button
                      block
                      className="my-4"
                      href="tel:+380974686196"
                      target="_blank"
                    >
                      +380974686196
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
        <Footer />
      </>
    );
  }
}
