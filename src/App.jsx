import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleBar from './components/titlebar'
import Intro from './components/intro';
import LandingPage from './components/landingpage.index'
import pictures from "../pictures.json/";
import Footer from './components/footer'

function App() {
  const [picturedisplay, setPictures] = useState(pictures)

  const shufflePictures = (id) => {
    const newArray = picturedisplay.sort(() => Math.random() - 0.5); 
    // return newArray;
    setPictures(newArray)
  }; 

  

  return (
    <>
    <TitleBar />
    <Intro />
    {pictures.map((picture)=> (
      <LandingPage  className ="container-fluid d-flex"
      key = {picture.id}
      id = {picture.id}
      image = {picture.image}
      shufflePictures = {shufflePictures}/>
    ))}
    <Footer />
    
    </>
  )
}

export default App
