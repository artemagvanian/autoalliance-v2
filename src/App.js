import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import "./App.scss";

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
