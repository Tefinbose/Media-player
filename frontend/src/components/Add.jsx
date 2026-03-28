import { faCloudArrowUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Add() {
  const [show, setShow] = useState(false);
  const [vedioDetails,setvedioDetails]=useState({
    caption:"",
    image:"",
    embedLink:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getValues =(ev)=>{
      console.log(ev);
      
  }
  return (
    <>
      <h6 className="fw-bold" onClick={handleShow}> 
        Upload New Video <FontAwesomeIcon icon={faUpload} />
      </h6>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <FontAwesomeIcon icon={faCloudArrowUp}/>
            Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">Please fill the following details</p>
          <form className="d-flex flex-column gap-3 border border rounded-1 p-3">
            <input placeholder="Video-Caption" className="form-control " type="text" onChange={(e)=>{setvedioDetails(...vedioDetails.caption,e.target.value)}} />
            <input placeholder="Video-Image" className="form-control" type="text"onChange={(e)=>{setvedioDetails(...vedioDetails.image,e.target.value)}} />
            <input placeholder="Video-Url" className="form-control" type="text" onChange={(e)=>{setvedioDetails(...vedioDetails.embedLink,e.target.value)}} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
