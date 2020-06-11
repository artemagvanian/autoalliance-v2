import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SEO from "../components/SEO";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_PARTNERS = gql`
  query {
    allPartner(sort: { priority: ASC }) {
      title
      description
      link
      linkText
      image {
        asset {
          url
        }
      }
    }
  }
`;

const Partners = () => {
  const { loading, error, data } = useQuery(GET_PARTNERS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <SEO title="Партнёры" />
      <Header />
      <Container>
        {data.allPartner.map((partner, index) => (
          <Card key={index} className="my-4">
            <Row className="no-gutters">
              <Col md={4}>
                <Card.Img
                  src={partner.image.asset.url + "?h=500&w=500&fit=min"}
                  alt=""
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>{partner.title}</Card.Title>
                  <Card.Text>
                    {partner.description}
                    <Button
                      block
                      className="my-4"
                      href={partner.link}
                      target="_blank"
                    >
                      {partner.linkText}
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Partners;
