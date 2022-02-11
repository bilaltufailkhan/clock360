import React from "react";
import "../assets/css/headeranim.css";

import big from "../assets/img/big.png";
import small from "../assets/img/small.png";

const HeaderAnimation = () => {
  return (
    <>
      <div className="header__animation">
        <div className="big">
          <img src={big} width="100%" height="auto" />
        </div>
        <div className="small">
          <img src={small} width="58%" height="auto" />
        </div>
      </div>
    </>
  );
};

export default HeaderAnimation;
