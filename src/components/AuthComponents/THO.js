import React from "react";

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
        <div className="sectionFive">
          <div>
            <div className="subheading">
              <p id="TooltipExample">Total Value Locked</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">13,935,803</p>
            <h2>Graph</h2>
          </div>
          <ul>
            <p id="TooltipExample">THO</p>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default THO;
