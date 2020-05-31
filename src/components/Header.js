import React, { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Basket from "./Basket";
import { Link } from "@reach/router";
import InfoModal from "./InfoModal";

const Header = () => {
  const [showInfo, setShowInfo] = useState(false);

  const links = [
    { href: "/", text: "Главная" },
    { href: "/goods", text: "Каталог товаров" },
    { href: "/services", text: "Услуги" },
    { href: "/about", text: "О нас" },
    { href: "/platform", text: "Автоплощадка" },
    { href: "/partners", text: "Партнёры" },
  ];

  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="text-light">
            <Link to="/" style={{ color: "white" }}>
              AutoAlliance
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {links.map((link) => (
                <Link
                  to={link.href}
                  key={link.href}
                  className="text-light ml-4 my-2 d-block"
                >
                  {link.text}
                </Link>
              ))}
            </Nav>
            <Basket className="my-2" />
            <div>
              <Button
                className="ml-lg-3 ml-0 my-2"
                block
                onClick={() => setShowInfo(true)}
              >
                Свяжитесь с нами
              </Button>
              <InfoModal
                show={showInfo}
                handleClose={() => setShowInfo(false)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
