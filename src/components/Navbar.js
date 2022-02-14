import React from "react";
import logo from "../assets/img/logo.svg";
import "../assets/css/navbar.css";

import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true,
      windowWidth: window.innerWidth,
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });

    console.log(this.state);
  };

  toggle() {}
  render() {
    const { windowWidth } = this.state;
    if (windowWidth > 768) {
      return (
        <div>
          <Navbar expand="md" className="nav__bar">
            <Container>
              <NavbarBrand href="/">
                <img src={logo} width="auto" height="41px" className="logo" />
              </NavbarBrand>
              <NavbarToggler
                onClick={this.toggle}
                className={this.toggle ? "toggle__btn" : "toggle__cross"}
              />
              <Collapse
                isOpen={this.state.isOpen}
                navbar
                className="smallNav__bg"
              >
                <Nav className="ml-auto navbar__content my-3" navbar>
                  <NavItem className="nav__item">
                    <NavLink href="/" className="nav__link">
                      FAQs
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav__item">
                    <NavLink href="#" className="nav__link">
                      Discord
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav__item">
                    <NavLink href="#" className="nav__link">
                      Telegram
                    </NavLink>
                  </NavItem>
                  <NavItem className="open__app">
                    <NavLink href="#" className="openApp__btn">
                      Open App
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    } else {
      return (
        <>
          <div className="drawer__nav py-4 container">
            <div className="logo">
              <img src={logo} width="auto" height="41px" className="logo" />
            </div>
            <div className="bread__crumb">
              <button className="btn__drawer" onClick={this.handleDrawer}>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className={!this.state.isOpen ? "drawer" : "drawer__off"}>
              <ul className="drawer__list">
                <li className="drawer__item">
                  <button onClick={this.handleDrawer} id="btn__xmark">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </li>
                <li className="drawer__item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Docs</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Socials</a>
                </li>
                <li className="drawer__item">
                  <a href="#">FAQs</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Discord</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Telegram</a>
                </li>
                <li className="drawer__item">
                  <button href="#" className="openApp__btn">
                    Open App
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      );
    }
  }
}

export default NavBar;
