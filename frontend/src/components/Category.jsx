import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { faBucket, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCategoryApi, deleteCategoryApi, getCategoryApi } from "../services/allApi";
import Vediocard from "./Vediocard";
import { toast, ToastContainer } from "react-toastify";


export default function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("");
  const [allCategory,setallCategory]=useState([]);
  

  const handleClose = () => {
    setShow(false);
    handleReset();
  };
  const handleShow = () => setShow(true);
  const handleReset = () => {
    setcategoryName("");
  };
  console.log(categoryName);

  const addNewCategory = async () => {
    if (categoryName) {
      const reqBody = {
        Categoryname: categoryName,
        allvedios: [],
      };
      const result = await addCategoryApi(reqBody);
      console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        toast.success("Category added successfully");
        handleClose();
      } else {
        toast.error("Something went wrong");
        handleReset();
      }
    } else {
      toast.info("please add a category");
    }
  };
  // Function to getAllCategory
  const getAllCtegory =async()=>{
    const result = await getCategoryApi()
    console.log(result);
    if(result.status >=200 && result.status<300){
      setallCategory(result.data)
    }
  }
// console.log(allCategory);
const deleteCategory=async(id)=>{
  const result = await deleteCategoryApi(id)
  console.log(result);
  if(result.status>=200 && result.status<=300){

  }
}

  useEffect(()=>{
    getAllCtegory()

  },[allCategory])

  return (
    <>
      <h6>category</h6>
      <div className="sm text-center mt-5 ">
        <Button variant="primary" onClick={handleShow} className="rounded">
          add category
        </Button>
      </div>



     {
     allCategory?.length>0? 
    allCategory.map((items,index)=>(
       <div>
      
      <div  key={index} className="d-flex justify-content-between align-items-center border border-primary p-4 mt-3">
        <h6 className="text-danger">{items.Categoryname}</h6>
        <FontAwesomeIcon onClick={()=>deleteCategory(items?.id)}  className="" icon={faTrash} />
      </div>
      <div className="mt-4">{/* < Vediocard/> */}</div>
     </div>
    
    ))
     :
      <div>
        <h4 className="text-danger text-center mt-4">No category added yet</h4>
      </div>
     }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={categoryName}
            onChange={(e) => {
              setcategoryName(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter the category name"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={addNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}



