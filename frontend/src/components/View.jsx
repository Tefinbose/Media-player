import React from 'react'
import Vediocard from './Vediocard'

function View() {
  return (
  <>
  
   <div className="container-fluid mt-4">
     <h5>All videos</h5>
    <div className="row">
      <div className="col-md-3 "><Vediocard/></div>
      <div className="col-md-3"><Vediocard/></div>
      <div className="col-md-3"><Vediocard/></div>
       <div className="col-md-3"><Vediocard/></div>
      
    </div>
   </div>
  </>
  )
}

export default View