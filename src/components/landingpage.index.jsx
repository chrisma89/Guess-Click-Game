import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Container"
import pictures from "../../pictures.json";
import App from "../App";
// let checkArray = [];
const LandingPage = ({id, image, shufflePictures, updateScore}) => {

  const handleClick = (id) => { 
    console.log(id);
    shufflePictures();

    // checkArray.push(id);
    // console.log(checkArray)
   }
  
   return (
    <Card.Img variant="top" src={image} onClick={() => {{handleClick(id), updateScore(id)}}} className="img-container" style={{ width: '17.5rem', height : '16rem', margin : "1rem"}}/>
      );
}


export default LandingPage;
