import { faHouse, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon ,} from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetWatchHistory } from "../services/allApi";


function Watchhistory() {
  const [Videohistory,setVideoHistory]=useState([])

  const getAllWatchHistory = async ()=>{
    let result = await  GetWatchHistory()
    console.log(result);
   if(result.status >=200 && result.status<=300){
   setVideoHistory(result.data)
   }
  }
  
// Works when page loads
  useEffect(()=>{
    getAllWatchHistory()
  },[])
  
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <h5 className="">Watchhistory</h5>
        <Link to={"/home"}>
          <h5 className="d-flex justify-content-center align-items-center">
            <span className="d-none d-md-flex fs-5 me-2">Back Home </span>
            <FontAwesomeIcon icon={faHouse} />
          </h5>
        </Link>
      </div>
      <div className="container mt-5 table-responsive">
       {
        Videohistory?.length>0 ?
         <table className="table table-bordered">
          <thead>
            <tr>
              <th className="p-4 text-center">Sl No</th>
              <th className="p-4 text-center">Caption</th>
              <th className="p-4 text-center">Url</th>
              <th className="p-4 text-center">Timestamp</th>
              <th className="p-4 text-center">action</th>
            </tr>
          </thead>
          <tbody className="">
           {
            Videohistory.map((items,index)=>(
               <tr className="text-center">
              <td >{index}</td>
            <td >{items.caption}</td>
           <Link to={`${items?.url}`}> <td >{items.url}</td></Link>
            <td >{items.time}</td>
            <td><button className="btn-danger border border-rounded"><FontAwesomeIcon icon={faTrash}/></button></td>
            </tr>
            ))
           }
          </tbody>
        </table>
        :
        <div className="text-danger">
            <h1>History is cleared</h1>
        </div>
       }
      </div>
    </>
  );

}

export default Watchhistory
