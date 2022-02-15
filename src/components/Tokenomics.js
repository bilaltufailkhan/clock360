import React from "react";
import { Col, Container, Row } from "reactstrap";

import "../assets/css/tokenomics.css";
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
                $Clock360 is a BEP-20 with an Elastic Supply that rewards
                holders using a Positive Rebase Formula.
              </p>
            </Slide>
          </Col>
          <Col md={4} className="text-center">
            <Slide top>
              <div className="tokenomics__card anime1 mb-3">
                <img src={pieChart} width="auto" height="52px" />
                <h3>Automatic LP</h3>
                <span>
                  5% of the Trading Fees return to the Liquidity ensuring
                  $Clock360’s increasing Collateral Value.
                </span>
              </div>
            </Slide>
            <Slide bottom>
              <div className="tokenomics__card anime2 mb-3">
                <img src={protectImg} width="auto" height="90px" />
                <h3>Treasury</h3>
                <span>
                  3% of the purchases and 8% of the sales go Directly to the
                  treasury which supports the RFV.
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
                  5% of the trading fees are redirected to the RFV which helps
                  sustain and back the staking rewards providing by the positive
                  rebase.
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
