import React from 'react'
import Vediocard from './Vediocard'

function View() {
  return (
  <>
  
   <div className="container-fluid mt-4">
     <h5>All videos</h5>
    <div className="row xs p-3 d-flex justify-content-between">
      <div className="col-md-3 "><Vediocard/></div>
      <div className="col-md-3"><Vediocard/></div>
      <div className="col-md-3"><Vediocard/></div>
      
    </div>
   </div>
  </>
  )
}

export default View