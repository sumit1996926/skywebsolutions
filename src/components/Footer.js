import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sumit-yadav-a207b013b/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/sky_mb_nm?t=mS2Dc8M-BrPCPCpPari36Q&s=09">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/_n/emaillogin?uid=oybtyo&token=tM0vUi&auto_send=0">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
