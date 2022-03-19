import React from "react";
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
        <div className="sectionTwo p-4">
          <Doughnet />
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
        </div>
      </div>
    </>
  );
};

export default Treasury;
