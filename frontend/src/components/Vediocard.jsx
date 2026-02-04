import { faBucket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Vediocard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Img onClick={handleShow}
            style={{ height: "250px" }} className=""
            variant="top"
            src="./public/images/Sailor - song.jpg"
          />
          <Card.Body>
            <div className="d-flex gap-5 sm d-flex justify-content-between">
              <Card.Title>Card Title</Card.Title>
              <Button className="text-danger" variant="primary">
                <FontAwesomeIcon className="" icon={faBucket} />
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Modal */}
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe  style={{width:"100%",height:"300px"}} src="https://www.youtube.com/embed/1lrFsXkT_rM?autoplay=1" title="Gigi Perez - Sailor Song (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

      </div>
    </>
  );
}

export default Vediocard;
