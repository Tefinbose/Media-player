import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
Link

function Watchhistory() {
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
            <tr>
              <td >dummy</td>
            <td >dummy</td>
            <td >dummy</td>
           <Link to={""}> <td >dummy</td></Link>
            <td >dummy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchhistory;
