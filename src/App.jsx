import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleBar from './components/titlebar'
import Intro from './components/intro';
import LandingPage from './components/landingpage.index'
import pictures from "../pictures.json/";
import Footer from './components/footer'
 let checkArray = [];
function App() {
  // usestate to shuffle that pictures array
  const [picturedisplay, setPictures] = useState(pictures)
  
  // function to shuffle array and set new array into state
  const shufflePictures = () => {
    const newArray = [...picturedisplay]
     newArray.sort(() => Math.random() - 0.5); 
    console.log(newArray)
    setPictures(newArray) 
   
  }; 



  // usestate to increment score and display success message

  const [score, setScore] = useState(0);

  // function to check if the picture id has been clicked already

  const updateScore = (id) => {
   checkArray.push(id);
   console.log(checkArray)
  }

  

  return (
    <>
    <TitleBar />
    <Intro />
    {picturedisplay.map((picture)=> (
      <LandingPage  className ="container-fluid d-flex"
      key = {picture.id}
      id = {picture.id}
      image = {picture.image}
      shufflePictures = {shufflePictures}
      updateScore = {updateScore}
      />
    ))}
    <Footer />
    
    </>
  )
}

export default App
