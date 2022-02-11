import React from "react";
import { Col, Container, Row } from "reactstrap";

import "../assets/css/listings.css";

const Listings = () => {
  return (
    <>
      <Container className="py-5">
        <Row className="py-5 justify-content-center text-center">
          <Col xs={12}>
            <h1 className="text-white listing__head">LISTINGS</h1>
          </Col>
        </Row>

        <Row className="py-5 px-3 justify-content-center">
          <Col lg={5} className="">
            <div className="ribbon">
              <p>COMPLETED</p>
            </div>
            <div className="listing__box text-center py-4 w-100 mb-5">
              <p className="lisitng__heading">PRIVATE SALE</p>
              <p className="listing__date">28 FEB 2022</p>
              <p className="listing__subheading">BONUS</p>
              <p className="listing__percentage">7%</p>
              <p className="listing__allocation">
                <span className="allocation">Allocation: </span>
                <span className="allocation__percentage">1.5% Tokens</span>
              </p>
              <p className="listing__price">
                <span className="price">Price: </span>
                <span className="price__amount">1 BNB = 646.66 C360</span>
              </p>
            </div>
          </Col>
          <Col lg={5} className="d-flex align-items-center mb-5">
            <div className="ribbon">
              <p>COMING SOON</p>
            </div>
            <div className="listing__box text-center py-4 w-100">
              <p className="lisitng__heading">LISTING</p>
              <p className="listing__date">PancakeSwap</p>
              <p className="listing__subheading">LISTING PRICE</p>
              <p className="listing__percentage">$0.75</p>
              <p className="listing__allocation">
                <span className="allocation">Allocation: </span>
                <span className="allocation__percentage">1.5% Tokens</span>
              </p>
              <p className="listing__price">
                <span className="price">Price: </span>
                <span className="price__amount">1 BNB = 646.66 C360</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Listings;
