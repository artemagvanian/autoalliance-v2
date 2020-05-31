import React from "react";
import { Col, Card, Button, Badge, Row } from "react-bootstrap";
import BasketContext from "./BasketContext";
import { Link } from "@reach/router";

const Good = ({ good }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="my-3">
    <Card>
      <div>
        <Card.Img
          variant="top"
          src={good.photos[0].asset.url + "?h=500&w=500&fit=min"}
          alt=""
        />
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
      <Card.Body>
        <Card.Title>{good.title}</Card.Title>
        <Card.Text as="div">
          <p className="text-light m-0">
            {good.oldPrice ? <strike>{good.oldPrice + " UAH"}</strike> : <br />}
          </p>
          <p className="text-primary" style={{ fontSize: 25 }}>
            {good.newPrice + " UAH"}
          </p>
          {good.availability ? (
            <p className="text-primary">{good.availability}</p>
          ) : (
            <br />
          )}
          <Row>
            <Col className="pr-1">
              <BasketContext.Consumer>
                {({ handleBasketChange }) => (
                  <Button
                    variant="outline-primary"
                    block
                    onClick={() => handleBasketChange(good)}
                  >
                    В корзину
                  </Button>
                )}
              </BasketContext.Consumer>
            </Col>
            <Col className="pl-1">
              <Link to={`/details/${good.slug.current}`} id={good._id}>
                <Button variant="outline-info" block>
                  Детали
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default Good;
