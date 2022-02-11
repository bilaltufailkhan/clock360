import React from "react";
import "../assets/css/faqs.css";

import { Container, Row, Col, Collapse } from "reactstrap";

class Faqs extends React.Component {
  state = {
    id: "-1",
  };
  render() {
    return (
      <>
        <Container className="vh-auto w-auto">
          <Row className="py-5">
            <Col xs={12} className="faqs__head">
              <span className="faqs__h2">FAQs - </span>
              <span className="faqs__txt">Frequently Asked Questions</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "0" ? "-1" : "0",
                  }))
                }
              >
                <h6>What is Clock360?</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "0" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "0"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "1" ? "-1" : "1",
                  }))
                }
              >
                <h6>What is Auto-Compounding</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "1" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "1"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "2" ? "-1" : "2",
                  }))
                }
              >
                <h6>What issues is Clock360 trying to resolve?</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "2" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "2"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "3" ? "-1" : "3",
                  }))
                }
              >
                <h6>What makes Clock360 unique?</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "3" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "3"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "4" ? "-1" : "4",
                  }))
                }
              >
                <h6>
                  What are the benefits of Yield Farming/Staking on Clock360?
                </h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "4" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "4"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "5" ? "-1" : "5",
                  }))
                }
              >
                <h6>What is C360 Tokens?</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "5" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "5"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>

            <Col md={12} className="mb-3">
              <div
                className="d-flex align-items-center"
                style={{
                  color: "#fff",
                  border: "2px solid #FFE600",
                  padding: "16px 20px 10px 20px",
                }}
                onClick={(e) =>
                  this.setState((prevState) => ({
                    id: prevState.id == "6" ? "-1" : "6",
                  }))
                }
              >
                <h6>How can I take part in Clock360's ICO?</h6>
                <i
                  className={`ml-auto fa fa-angle-${
                    this.state.id == "6" ? "up" : "down"
                  }`}
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <Collapse
                isOpen={this.state.id == "6"}
                style={{
                  padding: "16px 20px 10px 20px",
                }}
              >
                <p className="text-white mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Faqs;
