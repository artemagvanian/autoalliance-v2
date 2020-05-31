import React from "react";
import {
  Container,
  Card,
  CardGroup,
  Button,
  Image,
  CardDeck,
} from "react-bootstrap";
import { Link } from "@reach/router";

import Stripe from "../../assets/index/1.jpg";
import BigNav1 from "../../assets/bignavigation/1.jpeg";
import BigNav2 from "../../assets/bignavigation/2.jpeg";
import BigNav3 from "../../assets/bignavigation/3.jpeg";
import BigNav4 from "../../assets/bignavigation/4.jpeg";
import BigNav5 from "../../assets/bignavigation/5.jpeg";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PARTNERS = gql`
  query {
    allPartner(sort: { priority: ASC }) {
      title
      image {
        asset {
          url
        }
      }
    }
  }
`;

const BigNavigation = () => {
  const { loading, error, data } = useQuery(GET_PARTNERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="my-5">
      <Image src={Stripe} fluid alt="" />
      <h1 className="my-5 text-center">Комплексные автоуслуги Мариуполя</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={BigNav1} alt="" />
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
          <Card.Img variant="top" src={BigNav2} alt="" />
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
          <Card.Img variant="top" src={BigNav3} alt="" />
          <Card.Body>
            <Card.Title>Проверка авто перед покупкой</Card.Title>
            <Card.Text>
              Манипуляции с пробегом могут увеличить расходы на средний семейный
              автомобиль, а также могут скрывать серьезные механические
              проблемы. Мы предоставим Вам полный отчет о подержанном авто.
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
          <Card.Img variant="top" src={BigNav4} alt="" />
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
          <Card.Img variant="top" src={BigNav5} alt="" />
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
      <CardDeck className="mb-5">
        {data.allPartner.slice(0, 3).map((partner, index) => (
          <Card key={index}>
            <Card.Img
              variant="top"
              src={partner.image.asset.url + "?h=500&w=500&fit=min"}
              alt=""
            />
            <Card.Body>
              <Card.Title className="text-center">{partner.title}</Card.Title>
              <Link to={"/partners"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
      <CardDeck>
        {data.allPartner.slice(3).map((partner, index) => (
          <Card key={index}>
            <Card.Img
              variant="top"
              src={partner.image.asset.url + "?h=500&w=500&fit=min"}
              alt=""
            />
            <Card.Body>
              <Card.Title className="text-center">{partner.title}</Card.Title>
              <Link to={"/partners"}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
};

export default BigNavigation;
