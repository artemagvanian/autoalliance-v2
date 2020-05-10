import React, { Component } from "react";
import Header from "../Header";
import { Row, Col, Container, Button, Badge } from "react-bootstrap";
import BasketContext from "../BasketContext";
import { FirebaseContext } from "../Firebase";
import InfoModal from "../InfoModal";
import Footer from "../Footer";

export class Details extends Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { good: {}, imageUrl: "", showModal: false };
  }
  async componentDidMount() {
    let firebase = this.context;
    await firebase.db
      .collection("goods")
      .doc(this.props.goodId)
      .get()
      .then((doc) => {
        this.setState({ good: doc.data() });
      });

    if (this.state.good.image) {
      firebase.storage
        .ref("thumb_" + this.state.good.image.primary)
        .getDownloadURL()
        .then((url) => {
          this.setState({ imageUrl: url });
        });
    }
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleOpen() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="my-4">
            <Col xs="12" md="6">
              <div>
                <img src={this.state.imageUrl} alt="" className="w-100"></img>
                {this.state.good.badge ? (
                  <Badge
                    pill
                    variant={this.state.good.badge.type}
                    style={{ position: "absolute", top: 5, left: 5 }}
                  >
                    {this.state.good.badge.text}
                  </Badge>
                ) : (
                  ""
                )}
              </div>
            </Col>
            <Col xs="12" md="6">
              <h1 className="my-4">{this.state.good.title}</h1>
              <div>
                {this.state.good.price ? (
                  <div>
                    <p className="text-light m-0">
                      {this.state.good.price.previous ? (
                        <strike>
                          {this.state.good.price.previous + " UAH"}
                        </strike>
                      ) : (
                        <br />
                      )}
                    </p>
                    <p className="text-primary" style={{ fontSize: 40 }}>
                      {this.state.good.price.current + " UAH"}
                    </p>
                  </div>
                ) : (
                  <br />
                )}
                {this.state.good.stock ? (
                  <p className={"text-" + this.state.good.stock.type + " lead"}>
                    {this.state.good.stock.text}
                  </p>
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
                        onClick={() => handleBasketChange(this.state.good)}
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
                    onClick={() => this.handleOpen()}
                  >
                    Узнать больше
                  </Button>
                  <InfoModal
                    show={this.state.showModal}
                    handleClose={() => this.handleClose()}
                  />
                </Col>
              </Row>
              <p className="lead mt-4">{this.state.good.short_description}</p>
            </Col>
          </Row>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.good.description }}
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default Details;
