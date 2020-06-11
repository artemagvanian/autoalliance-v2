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

const GET_HOME_NAVIGATION_ITEMS = gql`
  query {
    allHomeNavigationItem(sort: { order: ASC }) {
      title
      photo {
        asset {
          url
        }
      }
      description
      link
    }
  }
`;

const BigNavigation = () => {
  const {
    loading: loadingPartner,
    error: errorPartner,
    data: partnerData,
  } = useQuery(GET_PARTNERS);
  const {
    loading: loadingNavigationItem,
    error: errorNavigationItem,
    data: navigationItemData,
  } = useQuery(GET_HOME_NAVIGATION_ITEMS);

  if (loadingPartner || loadingNavigationItem) return "Loading...";
  if (errorPartner || errorNavigationItem) return `Error!`;

  return (
    <Container className="my-5">
      <Image src={Stripe} fluid alt="" />
      <h1 className="my-5 text-center">Комплексные автоуслуги Мариуполя</h1>
      <CardGroup>
        {navigationItemData.allHomeNavigationItem.map((item, index) => (
          <Card key={index}>
            <Card.Img
              variant="top"
              src={item.photo.asset.url + "?h=500&w=500&fit=min"}
              alt=""
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link to={item.link}>
                <Button variant="primary" block>
                  Узнать больше
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
      <h1 className="my-5 text-center">Наши партнёры</h1>
      <CardDeck className="mb-5">
        {partnerData.allPartner.slice(0, 3).map((partner, index) => (
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
        {partnerData.allPartner.slice(3).map((partner, index) => (
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
