import React from "react";
import { Col, Container, Row } from "reactstrap";

import twitter from "../assets/img/twitter.svg";
import telegram from "../assets/img/telegram.svg";
import discord from "../assets/img/discord.svg";
import meta from "../assets/img/meta.svg";
import github from "../assets/img/github.svg";

const Footer = () => {
  return (
    <>
      <Container className="vh-50 py-5">
        <Row>
          <Col md={2} className=""></Col>
          <Col md={2} className="widget d-lg-block d-none">
            <p>Socials</p>
            <ul className="socials__list">
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  <img src={twitter} alt="" width="16px" height="auto" />
                  Twitter
                </a>
              </li>
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  <img src={telegram} alt="" width="16px" height="auto" />
                  Telegram
                </a>
              </li>
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  <img src={discord} alt="" width="16px" height="auto" />
                  Discord
                </a>
              </li>
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  <img src={meta} alt="" width="16px" height="auto" />
                  Medium
                </a>
              </li>
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  <img src={github} alt="" width="16px" height="auto" />
                  Github
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="widget">
            <p>Products</p>
            <ul className="socials__list">
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  Automatic-Staking
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} sm={6} className="widget">
            <p>Learn</p>
            <ul className="socials__list">
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  Documentation
                </a>
              </li>
              <li className="footer__ListItems">
                <a href="#" target="_blank">
                  Medium
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <button className="footer__OpenApp">Open App</button>
          </Col>

          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
