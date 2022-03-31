import React from "react";

const HeaderContent = () => {
  return (
    <>
      <div className="header__content">
        <h1>
          Clock360 - The Finest
          <br />
          & Auto-Staking & Auto-Compounding
          <br />
          Protocol in Crypto
        </h1>
        <ul className="header__list">
          <li className="headerList__item">Highest Fixed APY - 102,483%</li>
          <li className="headerList__item">
            First Automatic Staking and Compounding in your Wallet!
          </li>
          <li className="headerList__item">
            Get Rewards every 30 minutes / 48 Times Daily!
          </li>
        </ul>
        <div className="header__actions row">
          <div className="col-md-6 my-2">
            <button className="header__cta">Open App</button>
          </div>
          <div className="col-md-6 my-2 w-100">
            <button className="header__cta">White Paper</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
