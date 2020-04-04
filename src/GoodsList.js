import React from "react";
import { Container, Row } from "react-bootstrap";
import { FirebaseContext } from "./Firebase";
import Good from "./Good";

class GoodsList extends React.Component {
  static contextType = FirebaseContext;
  constructor(props) {
    super(props);
    this.state = { goods: [] };
  }
  componentDidMount() {
    let firebase = this.context;
    firebase.db
      .collection("goods")
      .get()
      .then((querySnapshot) => {
        let goods = [];
        querySnapshot.forEach((doc) => {
          goods.push({ ...doc.data(), id: doc.id });
        });
        this.setState({ goods: goods });
      });
  }
  render() {
    return (
      <Container className="py-4">
        <h3>{this.props.category}</h3>
        <Row>
          {this.state.goods.map((good) => (
            <Good key={good.id} good={good}></Good>
          ))}
        </Row>
      </Container>
    );
  }
}

export default GoodsList;
