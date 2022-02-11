import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/hours.css";

const HoursSection = () => {
  return (
    <>
      <Container className="hours__container d-lg-block d-none">
        <Row className="my-5">
          <Col xs={12} className="text-center">
            <div className="hours__overlay">
              <span>HOURS</span>
            </div>
            <div className="hours__content">
              <p>
                Titano Rewards Holders With
                <br />
                Automatic Compounding
                <br />
                Interest, Increasing Their TITANO
                <br />
                Holdings Over Time.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-md-content-center text-md-center">
          <Col xs={12} className="text-center text-white py-5">
            <h1>How It Works</h1>
            <div className="disp__text">
              <p className="text-white d-lg-none d-block">
                Titano Rewards Holders With Automatic Compounding Interest,
                Increasing Their TITANO Holdings Over Time.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "auto" }}>
          <Col md={4} className="d-flex d__flex p-5">
            <div className="heading">
              <span className="num">1</span>
            </div>
            <div className="content">
              <p className="text">Treasury Revenue</p>
              <p className="subtext">Buy Et Sell Fees</p>
              <p className="content__text">
                a portion of the buy and sell helps sustain the clock360
                revenue. 5%of the tradimg volume is redirected to the RFV, thus
                helping control the clock360 staking protocol distribution.
              </p>
            </div>
          </Col>

          <Col md={4} className="d-flex d__flex p-5">
            <div className="heading">
              <span className="num">2</span>
            </div>
            <div className="content">
              <p className="text">Treasury Growth</p>
              <p className="subtext">Clock360 Treasury</p>
              <p className="content__text">
                Treasuary inflow increases the clock360 treasury balance and
                back outstanding clock360 tokens.
              </p>
            </div>
          </Col>

          <Col md={4} className="d-flex d__flex p-5">
            <div className="heading">
              <span className="num">3</span>
            </div>
            <div className="content">
              <p className="text">Staking Rewards</p>
              <p className="subtext">Clock360 Token</p>
              <p className="content__text">
                compounds automatically with a treasuary-backed currency with
                intrinsic value.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HoursSection;
