import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Container"
// import pictures from "../../pictures.json";

const LandingPage = ({id, image}) => {

  return (
   
    
    
      <Card.Img variant="top" src={image} className="img-container" style={{ width: '17.5rem', height : '16rem', margin : "1rem"}}/>
   
      
   
    
  );
}


export default LandingPage;
