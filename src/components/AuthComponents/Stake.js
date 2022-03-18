import React from "react";
import { Col, Container, Input, Row } from "reactstrap";
import NumbersInput from "./NumbersInput";

import granfatherClock from "../../assets/img/grandfatherclock.png";
import wallClock from "../../assets/img/wallclock.png";
import tableClock from "../../assets/img/tableclock.png";
import EstimatedYield from "./EstimatedYield";

const Stake = () => {
  return (
    <>
      <Container className="stake">
        <Row>
          <Col md="6" sm="12">
            <h3>Clock to be Staked</h3>
            <Row className="align-items-center my-5">
              <Col xs="5" className="align-items-center">
                <div className="clock__title">
                  <img src={tableClock} alt="tableClock" />
                  <span>Table C360</span>
                </div>
              </Col>
              <Col xs="7">
                <NumbersInput />
              </Col>
            </Row>
            <Row className="align-items-center my-5">
              <Col xs="5" className="align-items-center">
                <div className="clock__title">
                  <img src={wallClock} alt="grandfatherclock" />
                  <span>Wall C360</span>
                </div>
              </Col>
              <Col xs="7">
                <NumbersInput />
              </Col>
            </Row>
            <Row className="align-items-center my-5">
              <Col xs="5" className="align-items-center">
                <div className="clock__title">
                  <img src={granfatherClock} alt="grandfatherclock" />
                  <span>Grand Father C360</span>
                </div>
              </Col>
              <Col xs="7">
                <NumbersInput />
              </Col>
            </Row>
            <Row className="align-items-center my-5">
              <Col xs="5" className="align-items-center">
                <div className="clock__title">
                  <i class="fa-solid fa-clock"></i>
                  <span>Days</span>
                </div>
              </Col>
              <Col xs="7">
                <div className="number__input">
                  <p className="highlight">{"Max"}</p>
                  <p>{"30"}</p>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center my-5">
              <Col xs="12" className="align-items-center">
                <div className="clock__title">
                  <i class="fa-solid fa-circle-question"></i>
                  <span>Long Term Bonus</span>
                  <span className="percentage">49%</span>
                </div>
              </Col>
            </Row>
            <Row className="pb-5">
              <Col md="6" sm="12">
                <button className="btn btn-lg btn-block btn__approve my-2">
                  Approve
                </button>
              </Col>
              <Col md="6" sm="12">
                <button className="btn btn-lg btn-block btn__join my-2">
                  Stake to join C360
                </button>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <EstimatedYield />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stake;
