import React from "react";
import { Container, Row, Col } from "reactstrap";
import anime from "animejs";

import Slide from "react-reveal/Slide";

const Earning = () => {
  return (
    <>
      <Container className="">
        <Row className="">
          <Col xs={12} className="text-center earning__heading">
            <h1>How Much Can I Earn?</h1>
            <br />
            <p>
              Clock360 is powered by DeFi and is designed in such a way that it
              helps you seemlessly generate maximum cash flow from your Crypto
              in the most flexible manner.
            </p>
          </Col>
        </Row>
        <br />
        <Row className="d-flex align-items-center py-5 justify-content-center">
          <Col md={4} sm={6} className="p-0 mx-5 my-3">
            <Slide left>
              <p className="earning__left text-lg-left text-center">
                At the end of the year and with $1000 USD of $Clock360 invested.
              </p>
            </Slide>
          </Col>
          <Col md={4} sm={6} className="text-center mx-5 my-3 earningRight">
            <Slide right>
              <p className="earning__right">
                You can Earn upto{" "}
                <span id="earning__amount">$1,002,758.54 USD</span> of $Clock360
                at 102,483.58% APY*.
              </p>
              <p className="text-white" style={{ fontSize: "11px" }}>
                Earnings are calculated in a scenario where the RFV sustains the
                Rebase Rewards for 360 Days.
              </p>
              <button className="earning__btn">Start Earning Now {">"}</button>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Earning;
