import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header (){
    return(
        <>
      <Navbar className="bg-transparent">
        <Link to={"/"} style={{textDecoration:"nonex"}}>
          <Container>
            <Navbar.Brand className="text-warning fs-3">
               <FontAwesomeIcon className="" icon={faVideo} beat />
               Media Player
            </Navbar.Brand>
          </Container>
        </Link>
      </Navbar>
        </>
    )
}
export default Header