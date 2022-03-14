import React from "react";

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
          <h2>Graph Here</h2>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionTwo">
          <h2>Graph</h2>
          <ul>
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
