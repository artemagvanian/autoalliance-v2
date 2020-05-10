import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light mt-5 py-3">
        <Container>
          <div>&copy; Autoalliance, 2020</div>
          <div>
            По вопросам смежных и авторских прав можно обратиться по телефонам
            +380 98 857 07 07, +380 66 857 07 07, +380 63 857 07 07
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
