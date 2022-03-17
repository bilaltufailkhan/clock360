import React from "react";
import { Col, Container, Input, Row } from "reactstrap";
import NumbersInput from "./NumbersInput";

const Stake = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="6" sm="12">
            <h3>Clock to be Staked</h3>
            <Row className="align-items-center my-5">
              <Col xs="5" className="align-items-center">
                <div className="clock__title">
                  <i class="fa-solid fa-clock"></i>
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
                  <i class="fa-solid fa-clock"></i>
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
                  <i class="fa-solid fa-clock"></i>
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
                  <span>49</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12">
            <h3>Estimated C360 Yield</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Stake;
