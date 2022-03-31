import React from "react";

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
                  Clock360 is the best Auto-Staking and Auto-Compounding
                  protocol in Crypto that has the highest fixed APY: 102,483%,
                  providing rewards every 30 minutes and making the staking
                  easier with the highest stable returns in Crypto.
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
                  Auto-Compounding in Clock360 is to hold certain tokens and
                  yield rewards automatically to earn the highest APY. It is an
                  excellent way to earn rewards as auto-compounding makes
                  Clock360 a fastest auto-staking protocol in Crypto.
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
                  Clock360 provides the safest platform for auto-staking right
                  in your wallet once you purchase your tokens. It makes it
                  easier so that there's no need to move your tokens to our
                  website. Our experts have coordinated all the elements you
                  need to make sure you get what you deserve.
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
                  Clock360 is unique because it has the highest fixed APY
                  ,making staking easier, providing maximum returns in Crypto
                  and most importantly saving you time while you make money.
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
                  Yield farming with Clock360 is another greate investment
                  strategy in DeFi involving lending or staking of your tokens
                  in the form of transaction interest. Yield Farming is
                  profitable with Clock360 as it invloves strategies of making
                  your investements profitable.
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
                  Clock360 is a Bep20 token with an eleastic supply which
                  ensures that its holders get rewarded with a rebase formula.
                  Clock360 token is the first auto-staking and auto-compounding
                  token giving exceptional benefits including rewards for its
                  holders.
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
