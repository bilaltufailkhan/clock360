import React from "react";
import "../assets/css/headeranim.css";

import headerGif from "../assets/gif/1.gif";

const HeaderAnimation = () => {
  return (
    <>
      <div className="header__animation">
        <img
          src={headerGif}
          width="100%"
          height="auto"
          style={{ backgroundColor: "transparent", zIndex: "30010" }}
        />
      </div>
    </>
  );
};

export default HeaderAnimation;
