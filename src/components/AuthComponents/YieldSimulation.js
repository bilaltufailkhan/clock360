import React from "react";
import { Col, Row } from "reactstrap";
import GrandFatherClock from "./GrandFatherClock";
import TableClock from "./TableClock";
import WallClock from "./WallClock";

const YieldSimulation = () => {
  return (
    <>
      <h2>Clock360 Yield Simulator</h2>
      <p>
        In order to participate in SHOs users are required to Stake their DAO
        Tokens. Depositing DAO tokens to the Staking Contracts also provides
        Venture Yield Rewards. The Size of the reward depends on the staking
        period. Longer Stakes pay better, however users are required to pay 50%
        of their earned rewards when unstaking before the end of their defined
        period. To learn more watch the explainer video on the right. Check
        Historical APR from SHO Yield
      </p>
      <Row>
        <Col md="4" sm="12">
          <TableClock />
        </Col>
        <Col md="4" sm="12">
          <WallClock />
        </Col>
        <Col md="4" sm="12">
          <GrandFatherClock />
        </Col>
      </Row>
    </>
  );
};

export default YieldSimulation;
