import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Category from '../components/Category'
import View from '../components/View'
function Home() {
  return (
<>

<div className="container d-flex justify-content-between mt-4">
  <Add/>
  <h6><Link  style={{textDecoration:"none"}} to={"/watchhistory"}><p > Watch-history <FontAwesomeIcon icon={faClockRotateLeft} /></p></Link></h6>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-9">
      <View/>
    </div>
    <div className="col-md-3">
      <Category/>
    </div>
    
  </div>
</div>
</>

  )
}

export default Home