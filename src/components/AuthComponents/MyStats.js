import React from "react";
import { Container, Row, Col, Table } from "reactstrap";

import marketCapIcon from "../../assets/img/marketcapicon.png";
import apyStatsIcon from "../../assets/img/apystatsicon.png";
import rebaseIcon from "../../assets/img/rebaseicon.png";

const MyStats = () => {
  return (
    <>
      <Container className="myStats">
        <Row className="justify-content-center text-center">
          <Col md="4" sm="12" className="my-3">
            <p>
              <span>
                <img src={marketCapIcon} alt="Market Cap" />
              </span>
              Market Cap
            </p>
            <div className="market__cap my-4">
              <span className="text-center">$152,641,662.05</span>
            </div>
          </Col>
          <Col md="4" sm="12" className="my-3">
            <p>
              <span>
                <img src={apyStatsIcon} alt="Market Cap" />
              </span>
              APY Statistics
            </p>
            <div className="apy__stats my-4">
              <span className="text-center">102 483.58%</span>
            </div>
          </Col>
          <Col md="4" sm="12" className="my-3">
            <p>
              <span>
                <img src={rebaseIcon} alt="Market Cap" />
              </span>
              Next Rebase
            </p>
            <div className="next__rebase my-4">
              <span className="text-center">00:15:04</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="my-4">
            <h3>Staking Statistics</h3>
          </Col>
        </Row>
        <Row className="myStats__table p-3">
          <Col xs="12">
            <Row className="current__apy align-items-center">
              <Col md="6" sm="12">
                <span>Current APY:</span>
              </Col>
              <Col md="6" sm="12">
                <h4>102 483.58%</h4>
              </Col>
            </Row>

            <Row className="table__under align-items-center">
              <Col md="6" sm="12">
                <span>Your Wallet Balance:</span>
              </Col>
              <Col md="6" sm="12">
                <span>0</span>
              </Col>
            </Row>

            <Row className="table__under align-items-center">
              <Col md="6" sm="12">
                <span>Next Reward Amount:</span>
              </Col>
              <Col md="6" sm="12">
                <span>0</span>
              </Col>
            </Row>

            <Row className="table__under align-items-center">
              <Col md="6" sm="12">
                <span>Next Reward Yield:</span>
              </Col>
              <Col md="6" sm="12">
                <span>0.03958%</span>
              </Col>
            </Row>

            <Row className="table__under align-items-center">
              <Col md="6" sm="12">
                <span>ROI (5-Day Rate):</span>
              </Col>
              <Col md="6" sm="12">
                <h5>9.94%%</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyStats;
