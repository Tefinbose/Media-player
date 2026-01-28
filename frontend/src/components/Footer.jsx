import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
FontAwesomeIcon;

function Footer() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col sm={12} md={6}></Col>
          <Col sm={12} md={6}></Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;
