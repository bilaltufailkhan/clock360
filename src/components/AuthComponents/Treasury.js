import React from "react";
import { Col, Row } from "reactstrap";
import Doughnet from "./Doughnet";
import LineChart from "./LineChart";

const Treasury = () => {
  return (
    <>
      <div className="authTreasury p-5">
        <h1>Treasury</h1>
        <div className="sectionOne">
          <div className="subheading">
            <p id="TooltipExample">Total Value Locked</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$ 2,597,479</p>
          <LineChart />
          <div className="borderBottom"></div>
        </div>
        <Row className="sectionTwo p-4">
          <Col md="6" sm="12">
            <Doughnet />
          </Col>
          <Col md="6" sm="12">
            <ul className="ml-4">
              <li>
                <p>THO-USDC.e</p>
                <p>
                  $888,028,4 <span>(31%)</span>
                </p>
              </li>
              <li>
                <p>USDC.e(SpiritSwap)</p>
                <p>
                  $888,028,4 <span>(31%)</span>
                </p>
              </li>
              <li>
                <p>Curve aTriCrypto</p>
                <p>
                  $888,028,4 <span>(31%)</span>
                </p>
              </li>
              <li>
                <p>USDC.e</p>
                <p>
                  $888,028,4 <span>(31%)</span>
                </p>
              </li>
              <li>
                <p>Others</p>
                <p>
                  $888,028,4 <span>(31%)</span>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Treasury;
