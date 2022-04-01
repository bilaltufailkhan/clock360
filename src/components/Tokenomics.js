import React from "react";
import { Col, Container, Row } from "reactstrap";

import Slide from "react-reveal/Slide";

import protectImg from "../assets/img/shield.svg";
import piggyImg from "../assets/img/piggy.svg";
import pieChart from "../assets/img/chart.svg";

const Tokenomics = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={12} className="text-center tokenomics__head py-5">
            <h1>Tokenomics</h1>
          </Col>
        </Row>
        <Row className="d-flex align-items-center py-5 mb-5 justify-content-center">
          <Col md={4} className="tokenomics__content mb-3">
            <Slide left>
              <h2 className="text-lg-left text-center">
                Clock360 Tokenomics Explained
              </h2>
              <div className="tokenomics__line d-md-block d-none"></div>
              <p className="text-lg-left text-center">
                Clock360 provides a simple and elegant eleastic supply that
                rewards Clock360 token holders with a positive and proven rebase
                formula. Thus, making it risk free, sustainable and highly
                rewarding.
              </p>
            </Slide>
          </Col>
          <Col md={4} className="text-center">
            <Slide top>
              <div className="tokenomics__card anime1 mb-3">
                <img src={pieChart} width="auto" height="52px" />
                <h3>Automatic LP</h3>
                <span>
                  A portion of the trading fee(5%) is returned to the liquidity
                  in order to create Clock360's Colletral Stability.
                </span>
              </div>
            </Slide>
            <Slide bottom>
              <div className="tokenomics__card anime2 mb-3">
                <img src={protectImg} width="auto" height="90px" />
                <h3>Treasury</h3>
                <span>
                  The treasury of RFV is supported in such a way that 3% of the
                  purchases and 8% of the sales directly go to the treasury of
                  Clock360 making it the most effective.
                </span>
              </div>
            </Slide>
          </Col>
          <Col md={4} className="text-center mb-3">
            <Slide right>
              <div className="tokenomics__card anime3">
                <img src={piggyImg} width="auto" height="90px" />
                <h3>Risk Free Value</h3>
                <span>
                  The 5% fee for the trading is redirected to RFV which helps to
                  ensure its sustainability and ensures to back the staking
                  rewards by providing the highest stable rebase.
                </span>
              </div>
            </Slide>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tokenomics;
