import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../assets/css/roadmap.css";

import clockInnerImg from "../assets/img/ring.png";
import clockLogo from "../assets/img/yellow.png";
import q1Icon from "../assets/img/mdi_creation.svg";
import q2Icon from "../assets/img/mdi_Group.svg";
import q3Icon from "../assets/img/mdi_carbon.svg";
import q4Icon from "../assets/img/mdi_codesandbox.svg";

const RoadMap = () => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col xs={12} className="text-center roadmap__heading">
            Road Map
          </Col>
        </Row>
      </Container>
      <Container className="roadmap">
        <Row>
          <Col xs={12} className="justify-content-center">
            <div className="clock">
              <img
                src={clockInnerImg}
                width="200px"
                height="auto"
                className="clock__inner"
              />
              <img
                src={clockLogo}
                width="80px"
                height="auto"
                className="clock__logo"
              />
              <div className="q1">
                <span>Q1</span>
              </div>
              <div className="q2">
                <span>Q2</span>
              </div>
              <div className="q3">
                <span>Q3</span>
              </div>
              <div className="q4">
                <span>Q4</span>
              </div>
              <div className="q1__line"></div>
              <div className="triangle__1"></div>
              <div className="q2__line"></div>
              <div className="triangle__2"></div>
              <div className="q3__line"></div>
              <div className="triangle__3"></div>
              <div className="q4__line"></div>
              <div className="triangle__4"></div>
              <div className="q1__content text-center">
                <img src={q1Icon} width="25px" height="auto" />
                <br />
                <span>CREATION</span>
              </div>
              <div className="q2__content text-center">
                <img src={q2Icon} width="25px" height="auto" />
                <br />
                <span>GETTING STARTED</span>
              </div>
              <div className="q3__content text-center">
                <img src={q3Icon} width="25px" height="auto" />
                <br />
                <span>
                  REFINEMENT
                  <br />& NFT
                </span>
              </div>
              <div className="q4__content text-center">
                <img src={q4Icon} width="25px" height="auto" />
                <br />
                <span>ESTABLISHMENT</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RoadMap;
