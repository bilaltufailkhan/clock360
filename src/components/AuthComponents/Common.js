import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import LineChart from "./LineChart";

const Common = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  return (
    <>
      <div className="authCommon p-5">
        <h1>Common</h1>
        <div className="sectionOne">
          <div className="subheading">
            <p id="TooltipExample">Total Value Locked</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$22,395,791</p>
          <LineChart />
          <div className="borderBottom"></div>
        </div>
        <div className="sectionTwo">
          <div className="subheading">
            <p>24h Trading Volume</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$22,395,791</p>
          <LineChart />
          <div className="borderBottom"></div>
        </div>
        <div className="sectionThree">
          <div className="subheading">
            <p>Market Cap</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$22,395,791</p>
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Common;
