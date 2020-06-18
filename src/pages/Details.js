import React, { useState } from "react";
import { Row, Col, Container, Button, Badge } from "react-bootstrap";

import Header from "../components/Header";
import BasketContext from "../components/BasketContext";
import InfoModal from "../components/InfoModal";
import Footer from "../components/Footer";

import SEO from "../components/SEO";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import BlockContent from "@sanity/block-content-to-react";
import { Redirect } from "@reach/router";

const Details = (props) => {
  const GET_THICKNESS_GAUGE = gql`
    query {
      allThicknessGauge(where: { slug: { current: { eq: "${props.goodId}" } } }) {
        title
        oldPrice
        newPrice
        slug {
          current
        }
        availability
        shortDescription
        descriptionRaw
        photos {
          asset {
            url
          }
        }
      }
    }
  `;

  let { showModal, setShowModal } = useState();

  const { loading, error, data } = useQuery(GET_THICKNESS_GAUGE);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (data.allThicknessGauge.length == 0) {
    return <Redirect to="/goods" />;
  }

  const good = data.allThicknessGauge[0];

  return (
    <>
      <SEO title={good.title} />
      <Header />
      <Container>
        <Row className="my-4">
          <Col xs="12" md="6">
            <div>
              <img
                src={good.photos[0].asset.url}
                alt=""
                className="w-100"
              ></img>
              {good.badge ? (
                <Badge
                  pill
                  variant={good.badge.type}
                  style={{ position: "absolute", top: 5, left: 5 }}
                >
                  {good.badge.text}
                </Badge>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col xs="12" md="6">
            <h1 className="my-4">{good.title}</h1>
            <div>
              {good.oldPrice ? (
                <div>
                  <p className="text-light m-0">
                    {good.oldPrice ? (
                      <strike>{good.oldPrice + " UAH"}</strike>
                    ) : (
                      <br />
                    )}
                  </p>
                  <p className="text-primary" style={{ fontSize: 40 }}>
                    {good.newPrice + " UAH"}
                  </p>
                </div>
              ) : (
                <br />
              )}
              {good.availability ? (
                <p className="text-primary">{good.availability}</p>
              ) : (
                <br />
              )}
            </div>
            <Row>
              <Col>
                <BasketContext.Consumer>
                  {({ handleBasketChange }) => (
                    <Button
                      variant="outline-primary"
                      block
                      onClick={() => handleBasketChange(good)}
                    >
                      Купить
                    </Button>
                  )}
                </BasketContext.Consumer>
              </Col>
              <Col>
                <Button
                  variant="outline-primary"
                  block
                  onClick={() => setShowModal(true)}
                >
                  Узнать больше
                </Button>
                <InfoModal
                  show={showModal}
                  handleClose={() => setShowModal(false)}
                />
              </Col>
            </Row>
            <p className="lead mt-4">{good.shortDescription}</p>
          </Col>
        </Row>
        <BlockContent blocks={good.descriptionRaw} />
      </Container>
      <Footer />
    </>
  );
};

export default Details;
