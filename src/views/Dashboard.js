import React from "react";
import { Col, Container, Row } from "reactstrap";
import AuthNav from "../components/AuthComponents/AuthNav";
import Avax from "../components/AuthComponents/Avax";
import Common from "../components/AuthComponents/Common";
import LineChart from "../components/AuthComponents/LineChart";
import Moonbeam from "../components/AuthComponents/Moonbeam";
import Statik from "../components/AuthComponents/Statik";
import THO from "../components/AuthComponents/THO";
import Treasury from "../components/AuthComponents/Treasury";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="footer__bg">
      <AuthNav />
      <Container className="py-5 mt-5">
        <Row className="justify-content-center">
          <Col md="5" sm="12" className="my-5">
            <Common />
          </Col>
          <Col md="6" sm="12" className="offset-md-1 my-5">
            <Treasury />
          </Col>
          <Col md="5" sm="12" className="my-5">
            <THO />
          </Col>
          <Col md="6" sm="12" className="offset-md-1 my-5">
            <Statik />
          </Col>
          <Col md="5" sm="12" className="my-5">
            <Avax />
          </Col>
          <Col md="6" sm="12" className="offset-md-1 my-5">
            <Moonbeam />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Dashboard;
