import React from "react";
import Doughnet from "./Doughnet";

import { Col, Row } from "reactstrap";

const THO = () => {
  return (
    <>
      <div className="authTHO p-5">
        <h1>THO</h1>
        <div className="sectionOne">
          <div className="subheading">
            <p id="TooltipExample">Market Price (AVAX)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.126</p>
          <span className="grading">
            <i className="fa-solid fa-sort-down"></i> 4.35%
          </span>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionTwo">
          <div className="subheading">
            <p>Market Price(MOONBEAM)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.119</p>
          <span className="grading">
            <i className="fa-solid fa-sort-down"></i>6.00%
          </span>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionThree">
          <div className="subheading">
            <p>Backed Price</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$0.211</p>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionFour">
          <div className="subheading">
            <p>Current Emission Rate</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">4.250</p>
          <div className="borderBottom"></div>
        </div>
        <Row className="sectionFive">
          <Col className="my-2" md="6" sm="12">
            <div className="subheading">
              <p id="TooltipExample">Total Supply</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">$13,935,803</p>
            <Doughnet />
          </Col>
          <Col className="my-2" md="6" sm="12">
            <ul className="ml-2">
              <p id="TooltipExample">THO</p>
              <li>
                <p>Circulating Supply</p>
                <p>
                  12,340,618 THO <span>(89%)</span>
                </p>
              </li>
              <li>
                <p>Locked Supply</p>
                <p>
                  1,595,186 THO <span>(11%)</span>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default THO;
