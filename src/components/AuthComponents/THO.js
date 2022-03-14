import React from "react";

const THO = () => {
  return (
    <>
      <>
        <div className="authCommon p-5">
          <h1>THO</h1>
          <div className="sectionOne">
            <div className="subheading">
              <p id="TooltipExample">Market Price (AVAX)</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">$1.126</p>
            <span className="grading">
              <i className="fa-solid fa-sort-down"></i> Graph Here
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
              <i className="fa-solid fa-sort-down"></i> Graph Here
            </span>
            <div className="borderBottom"></div>
          </div>
          <div className="sectionThree">
            <div className="subheading">
              <p>Backed Price</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">$0.211</p>
            <span className="grading">
              <i className="fa-solid fa-sort-down"></i> Graph Here
            </span>
          </div>
          <div className="sectionFour">
            <div className="subheading">
              <p>Current Emission Rate</p>
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <p className="price">4.250</p>
            <span className="grading">
              <i className="fa-solid fa-sort-down"></i> Graph Here
            </span>
          </div>
        </div>
      </>
    </>
  );
};

export default THO;
