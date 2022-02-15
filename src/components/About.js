import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/aboutsec.css";

import Slide from "react-reveal/Slide";

const AboutSection = () => {
  return (
    <>
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6} className="text-center about__left order-sm-1">
            <Slide left>
              <h2>102 483.58%</h2>
              <p>Fixed Staking APY</p>
              <button className="openApp__about mb-5">Open App{" >"}</button>
            </Slide>
          </Col>
          <Col
            lg={6}
            className="about__right order-sm-12 text-lg-left text-center"
          >
            <Slide right>
              <h3>ABOUT</h3>
              <p className="">
                Titano Finance is transforming DeFi with the Titan° Autostaking
                Protocol [TAP) that delivers the industry's highest fixed APY,
                rebasing rewards every 30 minutes, and a simple buy-hold-earn
                system that grows your portfolio in your wallet, fast.
              </p>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutSection;
