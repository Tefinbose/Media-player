import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { faBucket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="sm text-center mt-5 ">
        <Button variant="primary" onClick={handleShow} className="rounded">
        Launch demo modal
      </Button>
      </div>

      <div className="border border-primary p-4 mt-3">
       <div className="d-flex justify-content-between align-items-center ">
         <h6>Tamil songs</h6>
        <FontAwesomeIcon className="" icon={faBucket} />
       </div>
        <div className="mt-2" style={{ backgroundColor: "grey"}}>
          <h6 className="p-2"> sailor song gsghshshgshsgs</h6>
        </div>
      </div>
       <div className="d-flex justify-content-between align-items-center border border-primary p-4 mt-3">
         <h6>Tamil songs</h6>
        <FontAwesomeIcon className="" icon={faBucket} />
       </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control" placeholder="Enter the category name" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
