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
  console.log(vedioDetails);

  const handleClose = () => {
    setShow(false)
    handleReset()
  }
  const handleShow = () => setShow(true);
  // Reset
  const handleReset =()=> {
    setvedioDetails({
    caption:"",
    image:"",
    embedLink:""
    })
  }
 //upload 
 const handleupload = ()=>{
    const {caption,image,embedLink}=vedioDetails;
    if(!caption||!image||!embedLink){
      alert("sorry for the inconvenience please fill the form")
    }
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
            <input placeholder="Video-Caption"value={vedioDetails.caption} className="form-control " type="text" onChange={(e)=>setvedioDetails({...vedioDetails,caption:e.target.value})} />
            <input placeholder="Video-Image" value={vedioDetails.image} className="form-control" type="text"onChange={(e)=>setvedioDetails({...vedioDetails,image:e.target.value})}/>
            <input placeholder="Video-Url" value={vedioDetails.embedLink} className="form-control" type="text" onChange={(e)=>setvedioDetails({...vedioDetails,embedLink:e.target.value})}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
           Reset
          </Button>
          <Button variant="primary" onClick={handleupload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
