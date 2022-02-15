import React from "react";
import { Container, Row, Col } from "reactstrap";
import nftImg from "../assets/img/nftbg.png";
import anime from "animejs";

import "../assets/css/nft.css";

import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const NftSection = () => {
  return (
    <>
      <Container className="py-5 my-5 d-flex align-items-center">
        <Row className="justify-content-center d-flex align-items-center">
          <Col md={6} className="order-6">
            <Slide left>
              <p className="clock__sub">Prize-Linked Accumulating Yield</p>
              <p className="clock__heading">Clock360 NFT</p>
              <p className="clock__content">
                Clock360 is the new clock360 nft based project that allows
                clock360 token holders to generate even more rewards. Simple,
                Powerful and Proven.
              </p>
              <ul className="clock__list">
                <li className="clockList__item">
                  <p>Your Titano Tokens Give You Access to P.L.A.Y.</p>
                </li>
                <li className="clockList__item">
                  <p>Easy to Enter Easy to Play</p>
                </li>
                <li className="clockList__item">
                  <p>Multiple Big Winners Each Week</p>
                </li>
                <li className="clockList__item">
                  <p>No One Loses Their Initial Deposit</p>
                </li>
                <li className="clockList__item">
                  <p>Even if you don’t win, keep all of your money!</p>
                </li>
              </ul>
            </Slide>
          </Col>
          <Col md={6} className="order-12">
            <Zoom>
              <img className="nftImg" src={nftImg} width="100%" height="auto" />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NftSection;
