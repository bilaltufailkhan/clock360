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
          <Col md={6} className="align-items-center">
            <HeaderContent />
          </Col>
          <Col md={6} className="py-sm-5 mt-sm-5">
            {/* <HeaderAnimation /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
