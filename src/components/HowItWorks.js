import React from "react";
import "../assets/css/howitworks.css";
import { Col, Container, Row } from "reactstrap";

const HowItWorks = () => {
  return (
    <>
      <Container className="howIt__works">
        <Row>
          <Col xs={12} className="text-center text-white py-5">
            <h1>How It Works</h1>
            <p className="text-white">
              Titano Rewards Holders With Automatic Compounding Interest,
              Increasing Their TITANO Holdings Over Time.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="d-flex p-5">
            <div className="heading">
              <span className="num">1</span>
            </div>
            <div className="content">
              <p className="text">Treasury Revenue</p>
              <p className="subtext">Buy Et Sell Fees</p>
              <p className="content__text">
                A portion of the buy and sell helps sustain the clock360
                revenue. 5%of the tradimg volume is redirected to the RFV, thus
                helping control the clock360 staking protocol distribution.
              </p>
            </div>
          </Col>

          <Col md={4} className="d-flex p-5">
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

          <Col md={4} className="d-flex p-5">
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

export default HowItWorks;
