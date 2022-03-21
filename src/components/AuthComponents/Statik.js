import React from "react";
import { Col, Row } from "reactstrap";
import Doughnet from "./Doughnet";

const Statik = () => {
  return (
    <>
      <div className="authTHO p-5">
        <h1>Statik</h1>
        <div className="sectionOne">
          <div className="subheading">
            <p id="TooltipExample">Market Price (AVAX)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.009</p>
          <span className="grading" style={{ color: "green" }}>
            <i className="fa-solid fa-sort-up" style={{ color: "green" }}></i>{" "}
            0.31%
          </span>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionTwo">
          <div className="subheading">
            <p>Market Price (MOONBEAM)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.012</p>
          <span className="grading">
            <i className="fa-solid fa-sort-down"></i>0.57%
          </span>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionThree">
          <div className="subheading">
            <p>Peg Price</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.000</p>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionFour">
          <div className="subheading">
            <p>Total Supply</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">5,240,981</p>
          <div className="borderBottom"></div>
        </div>
        <Row className="sectionFive">
          <Col md="6" sm="12" className="my-2">
            <div className="subheading">
              <p id="TooltipExample">Total Collateral</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">$4,192,785</p>
            <Doughnet />
          </Col>
          <Col md="6" sm="12" className="my-2">
            <ul className="ml-2">
              <p id="TooltipExample">THO</p>
              <li>
                <p>Available Collateral</p>
                <p>
                  $1,092,785 <span>(26%)</span>
                </p>
              </li>
              <li>
                <p>Platypus</p>
                <p>
                  $900,000 <span>(21%)</span>
                </p>
              </li>
              <li>
                <p>Curve AAVE</p>
                <p>
                  $600,000 <span>(14%)</span>
                </p>
              </li>
              <li>
                <p>Curve 3poolV2</p>
                <p>
                  $600,000 <span>(14%)</span>
                </p>
              </li>
              <li>
                <p>Impermax</p>
                <p>
                  $400,000 <span>(10%)</span>
                </p>
              </li>
              <li>
                <p>Trader Joe (Lending)</p>
                <p>
                  $300,000 <span>(7%)</span>
                </p>
              </li>
              <li>
                <p>Curve MAI</p>
                <p>
                  $300,000 <span>(7%)</span>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Statik;
