import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      <Container className="mt-5">
        <Row className="gy-4"> 
          <Col md={4} >
            <div className="d-flex justify-content-center align-items-center gap-2">
                <FontAwesomeIcon className="text-warning" icon={faVideo} beat />
                <h5 className="text-warning">Media Player</h5>
            </div>
            <p style={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              officia ipsa voluptatibus, a ut perferendis. Placeat hic neque
              reiciendis. Fugiat illum velit nemo aliquam quas temporibus nihil
              adipisci ex debitis?
            </p>
          </Col>
          <Col md={2} className="">
            <h4>Links</h4>
          <ul className="list-unstyled">
            <Link to={"/"}><a><li>Landing page</li></a></Link>
            <Link to={"/home"}><a><li>Home page</li></a></Link>
            <Link to={"/watchhistory"}><a><li>Watch history</li></a></Link>
          </ul>
          </Col>
          <Col md={2}>
            <h4>Guides</h4>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Bootstrap</li>
              <li>Bootswatch</li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <form className="d-flex  gap-">
                <input type="text" placeholder="Email; Id" />
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Footer;

