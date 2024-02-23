import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitleBar from './components/titlebar'
import Intro from './components/intro';
import LandingPage from './components/landingpage.index'
import pictures from "../pictures.json/";

function App() {
  const [, setPictures] = useState(pictures)

  return (
    <>
    <TitleBar />
    <Intro />
    {pictures.map((picture)=> (
      <LandingPage  className ="container-fluid d-flex"
      key = {picture.id}
      id = {picture.id}
      image = {picture.image}/>
    ))}
    
    
    </>
  )
}

export default App
