import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row className="justify-content-between align-items-center text-center">
          <Col md={4} xs={12}>
            <h5>About Us</h5>
            <p>We provide high-quality services to our customers worldwide.</p>
          </Col>
          <Col md={4} xs={12}>
            <h5>Quick Links</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#home" className="text-light">Home</a></li>
              <li className="list-inline-item"><a href="#about" className="text-light">About</a></li>
              <li className="list-inline-item"><a href="#services" className="text-light">Services</a></li>
              <li className="list-inline-item"><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <h5>Contact Us</h5>
            <p>Email: contact@example.com <br></br> Phone: +123 456 7890</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center">&copy; 2025 MyWebsite. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
