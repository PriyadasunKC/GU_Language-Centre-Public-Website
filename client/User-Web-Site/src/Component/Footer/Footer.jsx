import React from 'react'
import FooterStyles from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className={FooterStyles.footerContainer}>
      <div className={FooterStyles.footerLogo}>G U | Language Centre</div>
      <div className={FooterStyles.footerLinks}>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Features</li>
        </a>
        <a href="#">
          <li>Benefits</li>
        </a>
        <a href="#">
          <li>Course Structure</li>
        </a>
      </div>
      <div className={FooterStyles.footerSocialContainer}>
        <a href="https://www.facebook.com/yourpage">
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a href="https://www.twitter.com/yourpage">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
        <a href="https://www.instagram.com/yourpage">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </div>
    </div>
  );
}

export default Footer
