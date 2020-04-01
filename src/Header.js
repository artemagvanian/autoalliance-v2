import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import Basket from "./Basket";
import SearchBar from "./SearchBar";

const links = [
  { href: "#home", text: "Главная" },
  { href: "#goods", text: "Каталог товаров" },
  { href: "#services", text: "Услуги" },
  { href: "#about", text: "О нас" },
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="text-light">
              AutoAlliance
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                {links.map((link) => (
                  <Nav.Link
                    href={link.href}
                    key={link.href}
                    className="text-light"
                  >
                    {link.text}
                  </Nav.Link>
                ))}
              </Nav>
              <Row>
                <Col xs={12} sm={8} className="p-2">
                  <SearchBar />
                </Col>
                <Col xs={12} sm={4} className="p-2">
                  <Basket />
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
