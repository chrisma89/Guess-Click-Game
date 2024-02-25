import React from "react";    
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import App from "../App";

const TitleBar = ({message, score}) => {

  
  return (
    <Navbar expand="lg" className="d-flex justify-content-between" >
      <Container  style = {{backgroundColor : "#102820", padding : "10px"}}>
       
          <Nav className="d-flex justify-content-between"> 
            <Nav.Link style = {{paddingRight : "70px", color : "white", fontSize : "30px"}} href="#home">Guess-Click-Game</Nav.Link>
            <Nav.Link style = {{paddingRight : "70px", color : "white", fontSize : "30px"}} href="#home">{message}</Nav.Link>
            <Nav.Link style = {{paddingRight : "70px", color : "white", fontSize : "30px"}}href="#link">Score : {score} | Top Score : 0</Nav.Link>
          </Nav>
    
      </Container>
    </Navbar>
  );
}


export default TitleBar;