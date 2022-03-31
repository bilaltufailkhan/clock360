import React from "react";
import { Container, Row, Col } from "reactstrap";

import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const HoursSection = () => {
  return (
    <>
      <Container className="hours__container d-lg-block d-none">
        <Row className="my-5">
          <Col xs={12} className="text-center">
            <div className="hours__overlay">
              <span>HOURS</span>
            </div>
            <Zoom>
              <div className="hours__content">
                <p>
                  Clock360 does not only reward holders with automatic
                  compounding interest but also increases their holdings over
                  time.{" "}
                </p>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-md-content-center text-md-center">
          <Col xs={12} className="text-center text-white py-5">
            <Zoom>
              <h1>How It Works</h1>
              <div className="disp__text">
                <p className="text-white d-lg-none d-block">
                  Titano Rewards Holders With Automatic Compounding Interest,
                  Increasing Their TITANO Holdings Over Time.
                </p>
              </div>
            </Zoom>
          </Col>
        </Row>
        <Row style={{ height: "auto" }}>
          <Col md={4} className="d-flex d__flex p-5">
            <Slide left>
              <div className="heading">
                <span className="num">1</span>
              </div>
              <div className="content">
                <p className="text">Treasury Revenue</p>
                <p className="subtext">Buy Et Sell Fees</p>
                <p className="content__text">
                  Clock360 revenue is generated with a portion of the buy and
                  sell that makes it sustainable. 5% of the trading volume is
                  redirected to the RFV which helps to control the staking
                  protocol distribution of itself.
                </p>
              </div>
            </Slide>
          </Col>

          <Col md={4} className="d-flex d__flex p-5">
            <Zoom>
              <div className="heading">
                <span className="num">2</span>
              </div>
              <div className="content">
                <p className="text">Treasury Growth</p>
                <p className="subtext">Clock360 Treasury</p>
                <p className="content__text">
                  The regulated treasuary in-flow of Clock360 increases its
                  treasuary balance and also back outstanding Clock360 Tokens,
                  thus keeping a check on the in-flow of these tokens.
                </p>
              </div>
            </Zoom>
          </Col>

          <Col md={4} className="d-flex d__flex p-5">
            <Slide right>
              <div className="heading">
                <span className="num">3</span>
              </div>
              <div className="content">
                <p className="text">Staking Rewards</p>
                <p className="subtext">Clock360 Token</p>
                <p className="content__text">
                  Clock360 compounds automatically with the staking reward of
                  treasuary-backed currency from the minute you buy currency
                  with the intrinsic value. It provides you the fastest rebase
                  rewards.
                </p>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HoursSection;
