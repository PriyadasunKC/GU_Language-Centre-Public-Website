import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import UserStyles from "./User.module.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Statics from "./Statics/Statics";
import About from "./About/About";
import Features from "./Features/Features";
import Discover from "./Discover/Discover";
import Benefits from "./Benefits/Benefits";
import CourseStructure from "./CourseStructure/CourseStructure";
import FAQ from "./FAQ/FAQ";
import GetInTouch from "./GetInTouch/GetInTouch";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";

const User = () => {
  return (
    <div className={UserStyles.Home}>
      <div className={UserStyles.NavOuterContainer}>
        <div className={UserStyles.DesktopNavBar}>
          <Navbar
            className={`${UserStyles.NavBar} d-flex justify-content-between`}
            expand="lg"
          >
            <Navbar.Brand className={UserStyles.NavBrand} href="#">
              <div className={UserStyles.Brand}>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="/public/logo.png"
                  alt="logo"
                />
                <div>G.U. | Language Centre</div>
              </div>
            </Navbar.Brand>
            <Nav className={`${UserStyles.Nav} me-auto`}>
              <Nav.Link className={UserStyles.NavLinks} href="#">
                Home
              </Nav.Link>
              <Nav.Link className={UserStyles.NavLinks} href="#aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link className={UserStyles.NavLinks} href="#features">
                Features
              </Nav.Link>
              <Nav.Link className={UserStyles.NavLinks} href="#benefits">
                Our Benefits
              </Nav.Link>
              <Nav.Link className={UserStyles.NavLinks} href="#courseStructure">
                Course Structure
              </Nav.Link>
              <Nav.Link className={UserStyles.NavLinks} href="#faq">
                FAQs
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                className={`${UserStyles.ContactUsButton} arrow-button`}
                href="https://registration.gulcentre.com/"
                target="_blank"
              >
                Register
              </Button>
            </Form>
          </Navbar>
        </div>
        <div className={UserStyles.MobileNavBar}>
          <Navbar
            expand="lg"
            className={`bg-body-tertiary ${UserStyles.navMob}`}
          >
            <Navbar.Brand className={UserStyles.NavBrand} href="#">
              G U | Language Centre
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${UserStyles.Nav} me-auto`}>
                <Nav.Link className={UserStyles.NavLinksMobile} href="#">
                  Home
                </Nav.Link>
                <Nav.Link className={UserStyles.NavLinksMobile} href="#aboutUs">
                  About Us
                </Nav.Link>
                <Nav.Link
                  className={UserStyles.NavLinksMobile}
                  href="#features"
                >
                  Features
                </Nav.Link>
                <Nav.Link
                  className={UserStyles.NavLinksMobile}
                  href="#benefits"
                >
                  Our Benefits
                </Nav.Link>
                <Nav.Link
                  className={UserStyles.NavLinksMobile}
                  href="#courseStructure"
                >
                  Course Structure
                </Nav.Link>
                <Nav.Link className={UserStyles.NavLinksMobile} href="#faq">
                  FAQs
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className={UserStyles.HomeContainer}>
          <div className={UserStyles.HomeTextContainer}>
            <div className={UserStyles.homeTitle}>
              Unlock Endless <br /> Opportunities to <br /> learn{" "}
              <span className={UserStyles.HomeSpecial}>English</span>
            </div>
            <div className={UserStyles.homeDescription}>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </div>

            <div className={UserStyles.homeButtonGroup}>
              <button className={UserStyles.coursesButton}>
                See Courses
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={UserStyles.arrow}
                />
              </button>
              <button className={UserStyles.contactUsButton}>
                Contact us
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={UserStyles.arrow}
                />
              </button>
            </div>
          </div>

          <div className={UserStyles.HomeImageContainer}>
            <img
              src="/public/headerImage.png"
              alt=""
              className={UserStyles.HomeImage}
            />
          </div>
        </div>
      </div>

      <div className={UserStyles.Statics}>
        <Statics />
      </div>
      <div id="aboutUs" className={UserStyles.aboutUsContainer}>
        <About />
      </div>
      <div id="features" className={UserStyles.FeaturesContainer}>
        <Features />
      </div>
      <div className={UserStyles.Discover}>
        <Discover />
      </div>
      <div id="benefits" className={UserStyles.Benefits}>
        <Benefits />
      </div>
      <div id="courseStructure" className={UserStyles.CourseStructure}>
        <CourseStructure />
      </div>
      <div id="faq" className={UserStyles.FAQStructure}>
        <FAQ />
      </div>
      <div className={UserStyles.GetInTouch}>
        <GetInTouch />
      </div>
      <div className={UserStyles.Footer}>
        <Footer />
      </div>
      <div className={UserStyles.Copyright}>
        <Copyright />
      </div>
    </div>
  );
};

export default User;
