import React, { useEffect, useState } from "react";
import Vediocard from "./Vediocard";
import { Allvedioapi } from "../services/allApi";

function View({addVedioStatus}) {
  console.log(addVedioStatus);
  const [allVedio, setAllVedio] = useState([]); //data from the server are array of objects so we used the empty array

  const [deleteVedioStatus,setdeleteVedioStatus]=useState({})

  const getAllVedio = async () => {
    const result = await Allvedioapi(); // we need to get the data when the page loads , so we use the useEffect()
    // console.log(result);
    if (result.status >= 200 && result.status <= 300) {
      setAllVedio(result.data);
    }
  };
  console.log(allVedio);

  //  Which is used to call this function when the page loads
  useEffect(() => {
    getAllVedio();
  }, [addVedioStatus,deleteVedioStatus]);

  return (
    <>
      <div className="container-fluid mt-4">
        <h5>All videos</h5>
        <div className="row">
          {
          allVedio?.length > 0 ? (
            allVedio.map((items, index) => (
              <div className="col-md-3 p-3 " key={index}>
                <Vediocard video={items} setdeleteVedioStatus={setdeleteVedioStatus}/>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <img
                style={{ width: "50%" }}
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                alt=""
                srcset=""
              />
            </div>
          )
          }

        </div>
      </div>
    </>
  );
}

export default View;
