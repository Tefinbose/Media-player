import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
FontAwesomeIcon
function Home() {
  return (
<>

<div className="container d-flex justify-content-between mt-4">
  <Add/>
  <h6><Link  style={{textDecoration:"none"}} to={"/watchhistory"}><p > Watch-history <FontAwesomeIcon icon={faClockRotateLeft} /></p></Link></h6>
</div>
</>

  )
}

export default Home