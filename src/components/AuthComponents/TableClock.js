import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const TableClock = () => {
  return (
    <div className="table__clock">
      <div className="table__head p-3">
        <div className="heading">
          <i class="fa-solid fa-clock"></i>
          <h1>Table Clock</h1>
        </div>
        <p>Your 180 Days C360 Yield Rewards</p>
        <h3>170 C360</h3>
        <div className="heading__foot">
          <div className="apr">
            <p>9% APR</p>
          </div>
          <div className="amount">
            <p>$1,189</p>
          </div>
        </div>
      </div>
      <div className="table__body p-4">
        <h5>Staking Inputs</h5>
        <div className="range">
          <h6>Number of table C360 to be Staked</h6>
          <div className="ranges">
            <p>2000</p>
            <p>1,000,000</p>
          </div>
          <FormGroup>
            <Input
              id="exampleRange"
              name="range"
              type="range"
              className="rangeInput"
            />
          </FormGroup>
        </div>
        <div className="range">
          <h6>Days to be Staked</h6>
          <div className="ranges">
            <p>30d</p>
            <p>1,065d</p>
          </div>
          <FormGroup>
            <Input
              id="exampleRange"
              name="range"
              type="range"
              className="rangeInput"
            />
          </FormGroup>
        </div>
      </div>
      <div className="table__foot p-3">
        <button className="btn btn-block btn-lg">
          Join SHOs {"&"} VENTURE YIELD
        </button>
      </div>
    </div>
  );
};

export default TableClock;
