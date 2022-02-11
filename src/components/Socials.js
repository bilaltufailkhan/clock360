import React from "react";

import { Container, Row, Col } from "reactstrap";

import twitter from "../assets/img/twitter.svg";
import telegram from "../assets/img/telegram.svg";
import discord from "../assets/img/discord.svg";
import meta from "../assets/img/meta.svg";
import github from "../assets/img/github.svg";

import "../assets/css/socials.css";

const Socials = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="social__heading mb-5">Keep In Touch</h2>
            <div className="socialIcons__list">
              <a href="#" target="_blank">
                <img src={twitter} width="30px" height="auto" />
              </a>
              <a href="#" target="_blank">
                <img src={telegram} width="30px" height="auto" />
              </a>
              <a href="#" target="_blank">
                <img src={discord} width="30px" height="auto" />
              </a>
              <a href="#" target="_blank">
                <img src={meta} width="30px" height="auto" />
              </a>
              <a href="#" target="_blank">
                <img src={github} width="30px" height="auto" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Socials;
