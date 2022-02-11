import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AboutSection from "../components/About";
import AnimatedLine from "../components/AnimatedLine";
import FindUs from "../components/FindUs";
import Header from "../components/Header";
import HoursSection from "../components/Hours";
import NavBar from "../components/Navbar";

import "../assets/css/hours.css";
import HowItWorks from "../components/HowItWorks";
import Listings from "../components/Listings";
import NftSection from "../components/NftSection";
import Earning from "../components/Earning";
import Tokenomics from "../components/Tokenomics";
import Faqs from "../components/Faqs";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import RoadMap from "../components/RoadMap";

const AdminView = (props) => {
  return (
    <>
      <NavBar />
      <div className="header__bg">
        <Header />
      </div>
      <AboutSection />
      <FindUs />
      <AnimatedLine />
      <div className="mesh2">
        <HoursSection />
        {/* <HowItWorks /> */}
      </div>
      <Listings />
      <div className="nft__sectionsBG">
        <NftSection />
      </div>
      <div className="d-flex align-items-center">
        <Earning />
      </div>
      <Tokenomics />
      <RoadMap />
      <Faqs />
      <Socials />
      <Footer />
    </>
  );
};

export default AdminView;
