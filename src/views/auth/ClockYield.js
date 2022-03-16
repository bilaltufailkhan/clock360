import React from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import AuthNav from "../../components/AuthComponents/AuthNav";
import GrandFatherClock from "../../components/AuthComponents/GrandFatherClock";
import TableClock from "../../components/AuthComponents/TableClock";
import WallClock from "../../components/AuthComponents/WallClock";

class ClockYield extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <>
        <AuthNav />
        <Container>
          <Row className="">
            <Col md="12" className="align-items-center">
              <Nav tabs className="tabs__nav">
                <NavItem className="tabsNav__item">
                  <NavLink
                    // className={classnames({
                    //   active: this.state.activeTab === "1",
                    // })}
                    className="nav-link"
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Clock Yield Simulation
                  </NavLink>
                </NavItem>
                <NavItem className="tabsNav__item">
                  <NavLink
                    // className={classnames({
                    //   active: this.state.activeTab === "2",
                    // })}
                    className="nav-link"
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Stake C360
                  </NavLink>
                </NavItem>
                <NavItem className="tabsNav__item">
                  <NavLink
                    // className={classnames({
                    //   active: this.state.activeTab === "2",
                    // })}
                    className="nav-link"
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    My Stats
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                activeTab={this.state.activeTab}
                className="p-4 tabs__content"
              >
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12" className="px-4 py-4 clock__text">
                      <h2>Clock360 Yield Simulator</h2>
                      <p>
                        In order to participate in SHOs users are required to
                        Stake their DAO Tokens. Depositing DAO tokens to the
                        Staking Contracts also provides Venture Yield Rewards.
                        The Size of the reward depends on the staking period.
                        Longer Stakes pay better, however users are required to
                        pay 50% of their earned rewards when unstaking before
                        the end of their defined period. To learn more watch the
                        explainer video on the right. Check Historical APR from
                        SHO Yield
                      </p>
                      <Row>
                        <Col md="4" sm="12">
                          <TableClock />
                        </Col>
                        <Col md="4" sm="12">
                          <WallClock />
                        </Col>
                        <Col md="4" sm="12">
                          <GrandFatherClock />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md="12">
                      <h4>Tab 2 Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col md="12">
                      <h4>Tab 3 Contents</h4>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ClockYield;
