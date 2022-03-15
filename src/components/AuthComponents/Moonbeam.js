import React from "react";

const Moonbeam = () => {
  return (
    <>
      <div className="authTHO p-5">
        <h1 style={{ marginBottom: "1.5rem" }}>sTHO (MOONBEAM)</h1>
        <div className="sectionOne">
          <div className="subheading">
            <p id="TooltipExample">Market Price (AVAX)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.126</p>
          <div className="borderBottom"></div>
        </div>
        <div className="sectionTwo">
          <div className="subheading">
            <p>Market Price(MOONBEAM)</p>
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <p className="price">$1.119</p>
          {/* <div className="borderBottom"></div> */}
        </div>
      </div>
    </>
  );
};

export default Moonbeam;
