import React from "react";
import { Row, Col } from "reactstrap";

import percentageIcon from "../../assets/img/percentageicon.png";

const EstimatedYield = () => {
  return (
    <>
      <div className="estimated__yield">
        <div className="estimated__title">
          <img src={percentageIcon} alt="Percentage" />
          <h2>Estimated C360 Yield</h2>
        </div>
        <Row className="estimates">
          <Col md="5" sm="12" className="my-3">
            <p>
              Estimated APR{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>0%</h4>
          </Col>
          <Col md="7" sm="12" className="my-3">
            <p>
              Estimated Total C360 Rewards{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>
              0 C360 <span>$0</span>
            </h4>
          </Col>
        </Row>
        <div className="estimated__title mt-5">
          <img src={percentageIcon} alt="Percentage" />
          <h2>Estimated Venture Yield</h2>
        </div>
        <Row className="estimates">
          <Col md="5" sm="12" className="my-3">
            <p>
              Total DAO Power{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>0%</h4>
          </Col>
          <Col md="7" sm="12" className="my-3">
            <p>
              Tier{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>NO Active yet</h4>
          </Col>
        </Row>
        <Row className="estimates">
          <Col md="5" sm="12" className="my-3">
            <p>
              Max Allocations{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>0%</h4>
          </Col>
          <Col md="7" sm="12" className="my-3">
            <p>
              Estimated Winning Chances{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>0%</h4>
          </Col>
        </Row>
        <Row className="estimates">
          <Col md="5" sm="12" className="my-3">
            <p>
              Estimated SHO Yield APR{" "}
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </p>
            <h4>0% APR</h4>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default EstimatedYield;
