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
import MyStats from "../../components/AuthComponents/MyStats";
import Stake from "../../components/AuthComponents/Stake";
import YieldSimulation from "../../components/AuthComponents/YieldSimulation";
import Footer from "../../components/Footer";

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
      <div className="clock__yield">
        <AuthNav />
        <Container className="my-5 py-5">
          <Row className="">
            <Col md="12" className="align-items-center">
              <Nav tabs className="tabs__nav d-none d-md-flex">
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
                <TabPane tabId="1" id="yield">
                  <Row>
                    <Col sm="12" className="px-4 py-4 clock__text">
                      <YieldSimulation />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2" id="stake">
                  <Row>
                    <Col md="12">
                      <Stake />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3" id="stats">
                  <Row>
                    <Col md="12">
                      <MyStats />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default ClockYield;
