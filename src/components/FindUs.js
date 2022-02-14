import React from "react";
import "../assets/css/findus.css";

import { Col, Container, Row } from "reactstrap";

import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";
import img7 from "../assets/img/7.png";
import img8 from "../assets/img/8.png";
import AnimatedLine from "./AnimatedLine";

const FindUs = () => {
  return (
    <div className="findus">
      <Container className="find__us py-5 my-5">
        <Row className="align-items-center justify-content-center">
          <Col md={12} className="text-center findus__heading py-5">
            <h1>Find Us On</h1>
          </Col>
        </Row>
        <Row className="justify-content-center py-3 d-flex align-items-center text-center">
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img1} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img2} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img3} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img4} width="198px" height="auto" />
          </Col>
        </Row>
        {/* <Row>
          <AnimatedLine />
        </Row> */}
        <Row className="justify-content-center d-flex align-items-center text-center">
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img5} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img6} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img7} width="198px" height="auto" />
          </Col>
          <Col lg={3} md={6} className="p-2 my-2">
            <img src={img8} width="198px" height="auto" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FindUs;
