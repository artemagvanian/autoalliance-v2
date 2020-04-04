import React from "react";
import { Col, Card, Button, Badge, Row } from "react-bootstrap";

class Good extends React.Component {
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="my-3">
        <Card>
          <div>
            <Card.Img variant="top" src={this.props.good.image} />
            <Badge
              pill
              variant={this.props.good.badge.type}
              style={{ position: "absolute", top: 5, left: 5 }}
            >
              {this.props.good.badge.text}
            </Badge>
          </div>
          <Card.Body>
            <Card.Title>{this.props.good.title}</Card.Title>
            <Card.Text as="div">
              <p className="text-light m-0">
                {this.props.good.price.previous ? (
                  <strike>{this.props.good.price.previous + " UAH"}</strike>
                ) : (
                  <br />
                )}
              </p>
              <p className="text-primary" style={{ fontSize: 25 }}>
                {this.props.good.price.current + " UAH"}
              </p>
              <p className={"text-" + this.props.good.stock.type}>
                {this.props.good.stock.text}
              </p>
              <Row>
                <Col className="pr-1">
                  <Button variant="outline-primary" block>
                    Купить
                  </Button>
                </Col>
                <Col className="pl-1">
                  <Button variant="outline-info" block>
                    Детали
                  </Button>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default Good;
