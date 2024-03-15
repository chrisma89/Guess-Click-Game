import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Container";
import pictures from "../../pictures.json";
import App from "../App";

const LandingPage = ({ id, image, shufflePictures, updateScore }) => {

  // function to handle change based on user click
  const handleClick = (id) => {
    shufflePictures();
  };

  return (
   
    <Card.Img
      variant="top"
      src={image}
      onClick={() => {
        {
          handleClick(id), updateScore(id);
        }
      }}
      className="img-container"
      style={{ width: "17.7rem", height: "16rem", margin: "1rem" }}
    />
  );
};

export default LandingPage;
