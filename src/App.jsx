import { useState } from "react";
import TitleBar from "./components/titlebar";
import Intro from "./components/intro";
import LandingPage from "./components/landingpage.index";
import pictures from "../pictures.json/";
import Footer from "./components/footer";
import "./App.css";

// initialise an empty array to store the ids of the clicked images
let checkArray = [];

function App() {
  // usestate to shuffle that pictures array
  const [picturedisplay, setPictures] = useState(pictures);

  // use state to set message for feedback
  const [message, setMessage] = useState("Click an image to begin!");

  // use state for updating score
  const [score, setScore] = useState(0);

  // use state for updating top score
  const [topscore, setTopscore] = useState(0);

  // use state for changing color of feedback message
  const [messagecolor, setMessagecolor] = useState("white");

  // function to shuffle array and set new array into state
  const shufflePictures = () => {
    const newArray = [...picturedisplay]; //making a copy of the array to prevent mutation of the original array
    newArray.sort(() => Math.random() - 0.5);
  
    setPictures(newArray);
  };

// function to update score based on user interaction
  const updateScore = (id) => {
    if (!checkArray.includes(id)) {
      checkArray.push(id);
      console.log(checkArray);
      setMessagecolor("#C6878F");
      setMessage("You guessed correctly!");

      setScore(score + 1);
      if (score >= topscore) {
        setTopscore(topscore + 1);
      }
    } else {
      setMessagecolor("#C3B299");
      setMessage("You guessed incorrectly!");
      setScore(0);
      setPictures(pictures);
      checkArray = [];
    }
  };


  return (
    <>
      <TitleBar
        message={message}
        score={score}
        topscore={topscore}
        messagecolor={messagecolor}
      />
      <Intro />
      <div className="container-fluid d-flex flex-wrap justify-content-center">  {picturedisplay.map((picture) => (
        <LandingPage
          className="container-fluid d-flex m-0 border-0 p-0"
          key={picture.id}
          id={picture.id}
          image={picture.image}
          shufflePictures={shufflePictures}
          updateScore={updateScore}
        />
      ))}</div>
    
      <Footer />
    </>
  );
}

export default App;
