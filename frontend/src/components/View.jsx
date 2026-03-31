import React, { useEffect } from "react";
import Vediocard from "./Vediocard";
import { Allvedioapi } from "../services/allApi";

function View() {
  const getAllVedio = async () => {
    const result = await Allvedioapi(); // we need to get the data when the page loads , so we use the useEffect()
    console.log(result);
  };
//  Which is used to call this function when the page loads
  useEffect(()=>{
    getAllVedio();
  },[])

  return (
    <>
      <div className="container-fluid mt-4">
        <h5>All videos</h5>
        <div className="row">
          <div className="col-md-3 ">
            <Vediocard />
          </div>
          <div className="col-md-3">
            <Vediocard />
          </div>
          <div className="col-md-3">
            <Vediocard />
          </div>
          <div className="col-md-3">
            <Vediocard />
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
