import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Container
        fluid
        className="mt-5 d-flex justify-content-center align-items-center mx-auto sm p-4 mt-1 "
      >
        <Row className="w-100 ">
          <Col className="" md={6} xs={12}>
            <h3 className="fw-bold">
              Welcome to <span className="text-warning ">Media Player</span>
            </h3>
            <p
              className="mt-4"
              style={{ fontSize: "18px", textAlign: "justify" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
              aspernatur! Velit, aperiam placeat. Commodi error autem reiciendis
              velit dolorum magni maxime deserunt sit quae eaque perspiciatis,
              quia amet aspernatur eos? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur distinctio obcaecati officia maxime
              ullam magnam dolores officiis temporibus beatae. Ipsum esse nobis
              dolores dolore fuga, mollitia quia reprehenderit fugiat quis.
            </p>
            <Link to={"/home"}>
              <Button className="mt-4 sm mb-4" variant="warning">
                Get Started
              </Button>
            </Link>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            md={6}
            xs={12}
          >
            <img className="w-50" src="/images/Music-beat.gif" alt="logo" />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className=" d-flex justify-content-between align-items-center "
      >
        <Row className="w-100 mt-5 sm mx-auto g-3">
          <h3 className="text-center mb-4 ">Features</h3>
          <Col
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card className="" style={{ width: "18rem" }}>
              <img
                style={{ width: "100%", height: "300px", padding: "8px" }}
                src="images\download.gif"
                alt="image"
              />
              <Card.Body style={{ height: "200px" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  “Without music, life would be a mistake.” ― Friedrich
                  Nietzsche, Twilight of the Idols
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }}>
              <img
                style={{ width: "100%", height: "300px", padding: "8px" }}
                src="/images/Beats Gif.gif"
                alt=""
              />
              <Card.Body style={{ height: "200px" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  “And those who were seen dancing were thought to be insane by
                  those who could not hear the music.” ― Friedrich Nietzsche
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Card style={{ width: "18rem" }}>
              <img
                style={{ width: "100%", height: "300px", padding: "8px" }}
                src="\images\P!NK.gif"
                alt=""
              />
              <Card.Body style={{ height: "200px" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  “None but ourselves can free our minds.” ― Bob Marley
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Next-section */}
      <Container className="border border-secondary rounded mt-5">
        <Row className="w-100% p-4">
          <Col
            className="flex-column justify-content-center align-items-center"
            sm={12}
            md={6}>
              <h2 className="fw-bold"><span className="text-warning">Simple fast <br /> and Powerful</span></h2>
              <p style={{textAlign:"justify"}}><span style={{fontSize:"25px"}} >Play Everything </span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus sequi explicabo natus. Blanditiis optio, dicta similique saepe esse minus earum sit nobis fuga ad tempore cumque libero id aperiam.</p>
             <p style={{textAlign:"justify"}}><span style={{fontSize:"25px"}} >Play Everything </span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus sequi explicabo natus. Blanditiis optio, dicta similique saepe esse minus earum sit nobis fuga ad tempore cumque libero id aperiam.</p>
               <p style={{textAlign:"justify"}}><span style={{fontSize:"25px"}} >Play Everything </span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus sequi explicabo natus. Blanditiis optio, dicta similique saepe esse minus earum sit nobis fuga ad tempore cumque libero id aperiam.</p>
              
            </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            sm={12}
            md={6}
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zRzD3-a9_qc?si=q8SdlQgbOdniX-S-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;
