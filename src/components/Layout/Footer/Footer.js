import React from "react";
import { Container } from "reactstrap";
import { TwitterIcon, FacebookIcon, LinkednIcon } from "../../../libs/Icons";
import Dropdown from "./Dropdown";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="icon-set">
          <TwitterIcon>
            <i className="fa-brands fa-twitter"></i>
          </TwitterIcon>
          <FacebookIcon>
            <i className="fa-brands fa-facebook-f"></i>
          </FacebookIcon>
          <LinkednIcon>
            <i className="fa-brands fa-linkedin-in"></i>
          </LinkednIcon>
        </div>
        <div className="nav-list me-auto">
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
        <div className="dropdown ">
          Language: <Dropdown />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
