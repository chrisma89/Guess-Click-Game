import React from "react";    
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import App from "../App";

const TitleBar = ({message, score, topscore, messagecolor}) => {

  
  return (
    <Navbar expand="lg" className="d-flex justify-content-between navbar m-0 border-0 p-0" >
      <div  style = {{backgroundColor : "#23001E", padding : "10px",margin: "0", width : "100%"}}>
       
          <Nav className="d-flex justify-content-between"> 
            <Nav.Link style = {{paddingRight : "70px", color : "white", fontSize : "30px"}} href="#home">Guess-Click-Game</Nav.Link>
            <Nav.Link className="color" style = {{paddingRight : "20px", color : messagecolor, fontSize : "30px"}} href="#home">{message}</Nav.Link>
            <Nav.Link style = {{paddingLeft : "70px", color : "white", fontSize : "30px"}}href="#link">Score : {score} | Top Score : {topscore}</Nav.Link>
          </Nav>
    
      </div>
    </Navbar>
  );
}


export default TitleBar;