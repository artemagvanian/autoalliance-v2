import React from "react";
import { Col, Card, Button, Badge, Row } from "react-bootstrap";
import BasketContext from "./BasketContext";
import { FirebaseContext } from "./Firebase";
import { Link } from "@reach/router";

class Good extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { imageUrl: "" };
  }
  componentDidMount() {
    let firebase = this.context;
    if (this.props.good.image) {
      firebase.storage
        .ref("thumb_" + this.props.good.image.primary)
        .getDownloadURL()
        .then((url) => {
          this.setState({ imageUrl: url });
        });
    }
  }
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="my-3">
        <Card>
          <div>
            <Card.Img variant="top" src={this.state.imageUrl} alt="" />
            {this.props.good.badge ? (
              <Badge
                pill
                variant={this.props.good.badge.type}
                style={{ position: "absolute", top: 5, left: 5 }}
              >
                {this.props.good.badge.text}
              </Badge>
            ) : (
              ""
            )}
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
              {this.props.good.stock ? (
                <p className={"text-" + this.props.good.stock.type}>
                  {this.props.good.stock.text}
                </p>
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
                        onClick={() => handleBasketChange(this.props.good)}
                      >
                        В корзину
                      </Button>
                    )}
                  </BasketContext.Consumer>
                </Col>
                <Col className="pl-1">
                  <Link to={`/details/${this.props.good.id}`}>
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
  }
}

export default Good;
