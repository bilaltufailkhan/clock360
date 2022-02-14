import React from "react";
import "../assets/css/header.css";
import { Col, Container, Row } from "reactstrap";
import HeaderAnimation from "./HeaderAnimation";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <>
      <Container className="header py-5">
        <Row className="">
          <Col md={6} className="align-items-center order-1 order-sm-2">
            <HeaderContent />
          </Col>
          <Col md={6} className="header__gif order-2 order-sm-1">
            <HeaderAnimation />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
