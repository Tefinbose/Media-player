import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { DeleteVedio } from "../services/allApi";

function Vediocard({ video, setdeleteVedioStatus }) {
  // console.log(video);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteVediobyid = async (vedioId) => {
    const result = await DeleteVedio(vedioId);
    console.log(result);
    if (result.status >= 200 && result.status <= 299) {
      setdeleteVedioStatus(result.data);
    }
  };

  return (
    <>
      <div>
        <Card>
          <Card.Img
            onClick={handleShow}
            style={{ height: "250px", objectFit: "cover" }}
            className=""
            variant="top"
            src={video?.image}
          />
          <Card.Body>
            <div className="d-flex justify-content-between align-items">
              <Card.Title
                style={{
                  fontSize: "15px",
                  maxWidth: "150px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {video?.caption}
              </Card.Title>
              <Button
                style={{ flexShrink: 0 }}
                className="text-danger"
                variant="primary"
              >
                <FontAwesomeIcon
                  className=""
                  icon={faTrash}
                  onClick={() => deleteVediobyid(video?.id)}
                />
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
            <iframe
              style={{ width: "100%", height: "300px" }}
              src={`${video?.embedLink}?autoplay=1`}
              title="Gigi Perez - Sailor Song (Official Music Video)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Vediocard;
