import { faCloudArrowUp, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { videoApi } from "../services/allApi";



function Add() {
  const [show, setShow] = useState(false);
  const [vedioDetails, setvedioDetails] = useState({
    caption: "",
    image: "",
    embedLink: "",
  });
  console.log(vedioDetails);

  const handleClose = () => {
    setShow(false);
    handleReset();
  };
  const handleShow = () => setShow(true);
  // Reset
  const handleReset = () => {
    setvedioDetails({
      caption: "",
      image: "",
      embedLink: "",
    });
  };
  //upload
  const handleupload = async () => {
    const { caption, image, embedLink } = vedioDetails;
    if (!caption || !image || !embedLink) {
      toast.error("sorry for the inconvenience please fill the form");
    } else {
      //https://youtu.be/1lrFsXkT_rM?si=oO8KYALZ0adTPGVb (share)
      if (embedLink.startsWith("https://youtu.be")) {
        let link = `https://www.youtube.com/embed/${embedLink.slice(17, 28)}`;
        console.log(link);
        const result = await videoApi({ caption, embedLink: link, image });
        console.log(result);

        if (result.status >= 200 && result.status <= 300) {
          toast.success("Video added sucessfully");
          handleClose();
        } else {
          toast.error("Something went wrong");
          handleReset();
        }
      }
      //https://www.youtube.com/watch?v=1lrFsXkT_rM
      else {
        let link = `https://www.youtube.com/embed/${embedLink.slice(-11)}`;
        console.log(link);

        const result = await videoApi({ caption, embedLink: link, image });
        console.log(result);

        if (result.status >= 200 && result.status <= 300) {
          toast.success("Video added sucessfully");
          handleClose();
        } else {
          toast.alert("Something went wrong");
          handleReset();
        }
      }
    }
  };
  return (
    <>
      <h6 className="fw-bold" onClick={handleShow}>
        Upload New Video <FontAwesomeIcon icon={faUpload} />
      </h6>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <FontAwesomeIcon icon={faCloudArrowUp} />
            Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-bold">Please fill the following details</p>
          <form className="d-flex flex-column gap-3 border border rounded-1 p-3">
            <input
              placeholder="Video-Caption"
              value={vedioDetails.caption}
              className="form-control "
              type="text"
              onChange={(e) =>
                setvedioDetails({ ...vedioDetails, caption: e.target.value })
              }
            />
            <input
              placeholder="Video-Image"
              value={vedioDetails.image}
              className="form-control"
              type="text"
              onChange={(e) =>
                setvedioDetails({ ...vedioDetails, image: e.target.value })
              }
            />
            <input
              placeholder="Video-Url"
              value={vedioDetails.embedLink}
              className="form-control"
              type="text"
              onChange={(e) =>
                setvedioDetails({ ...vedioDetails, embedLink: e.target.value })
              }
            />
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

       <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Add;
